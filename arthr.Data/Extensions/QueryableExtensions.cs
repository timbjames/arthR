namespace arthr.Data.Extensions
{
    #region Usings

    using System;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Utils.Exceptions;
    using Utils.Exceptions.Enums;

    #endregion

    public static class QueryableExtensions
    {
        #region Public Methods

        /// <summary>
        /// Gets the first entity or throws a not found exception.
        /// </summary>
        /// <typeparam name="T">The entity type being queried.</typeparam>
        /// <param name="query">The query.</param>
        /// <param name="predicate">The predicate.</param>
        /// <param name="errorCode">The error code.</param>
        /// <returns></returns>
        public static async Task<T> FirstOrNotFoundAsync<T>(this IQueryable<T> query, Expression<Func<T, bool>> predicate, ErrorCode errorCode)
        {
            return await QueryOrNotFound(() => query.FirstOrDefaultAsync(predicate), errorCode);
        }

        public static IOrderedQueryable<T> GenericSortingHelper<T>(this IQueryable<T> source, string propertyName, bool descending)
        {
            ParameterExpression param = Expression.Parameter(typeof(T), string.Empty);
            MemberExpression property = Expression.PropertyOrField(param, propertyName);
            LambdaExpression sort = Expression.Lambda(property, param);
            MethodCallExpression call = Expression.Call(
                typeof(Queryable),
                descending ? "OrderByDescending" : "OrderBy",
                new[] { typeof(T), property.Type },
                source.Expression,
                Expression.Quote(sort));
            return (IOrderedQueryable<T>)source.Provider.CreateQuery<T>(call);
        }

        public static IOrderedQueryable<TSource> Order<TSource, TKey>(this IQueryable<TSource> source, Expression<Func<TSource, TKey>> selector, bool ascending)
        {
            return ascending ? source.OrderBy(selector) : source.OrderByDescending(selector);
        }

        /// <summary>
        /// Gets a single entity or throws a not found exception.
        /// </summary>
        /// <typeparam name="T">The entity type being queried.</typeparam>
        /// <param name="query">The query.</param>
        /// <param name="predicate">The predicate.</param>
        /// <param name="errorCode">The error code.</param>
        /// <returns></returns>
        public static async Task<T> SingleOrNotFoundAsync<T>(this IQueryable<T> query, Expression<Func<T, bool>> predicate, ErrorCode errorCode)
        {
            return await QueryOrNotFound(() => query.SingleOrDefaultAsync(predicate), errorCode);
        }

        /// <summary>
        /// Gets a single result or throws a processing failure.
        /// </summary>
        /// <typeparam name="T">The entity type being queried.</typeparam>
        /// <param name="query">The query.</param>
        /// <param name="predicate">The predicate.</param>
        /// <param name="errorCode">The error code.</param>
        /// <returns></returns>
        public static async Task<T> SingleOrProcessingFailureAsync<T>(this IQueryable<T> query, Expression<Func<T, bool>> predicate, ErrorCode errorCode)
            where T : class
        {
            return await QueryOrProcessingFailure(() => query.SingleOrDefaultAsync(predicate), errorCode);
        }

        public static IOrderedQueryable<TSource> Then<TSource, TKey>(this IOrderedQueryable<TSource> source, Expression<Func<TSource, TKey>> selector, bool ascending)
        {
            return ascending ? source.ThenBy(selector) : source.ThenByDescending(selector);
        }

        public static IQueryable<TSource> WhereOptionally<TSource>(this IQueryable<TSource> source, Expression<Func<TSource, bool>> predicate)
        {
            return predicate != null ? source.Where(predicate) : source;
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Executes the query and returns the result or throws a common not found exception if the result was null.
        /// </summary>
        /// <typeparam name="T">The entity type being returned.</typeparam>
        /// <param name="func">The function.</param>
        /// <param name="errorCode">The error code.</param>
        /// <returns></returns>
        private static async Task<T> QueryOrNotFound<T>(Func<Task<T>> func, ErrorCode errorCode)
        {
            T result = await ExecuteQuery(func, errorCode);

            if (result == null)
            {
                throw CommonException.NotFound(errorCode);
            }

            return result;
        }

        /// <summary>
        /// Executes the query and throws a processing failure exception if there was no result.
        /// </summary>
        /// <typeparam name="T">The entity type being returned.</typeparam>
        /// <param name="func">The function.</param>
        /// <param name="errorCode">The error code.</param>
        /// <returns></returns>
        private static async Task<T> QueryOrProcessingFailure<T>(Func<Task<T>> func, ErrorCode errorCode)
        {
            T result = await ExecuteQuery(func, errorCode);

            if (result == null)
            {
                throw ProcessingFailureException.EntityNotFound(errorCode);
            }

            return result;
        }

        /// <summary>
        /// Executes the query.
        /// </summary>
        /// <typeparam name="T">The type of entity being queried.</typeparam>
        /// <param name="func">The function.</param>
        /// <param name="errorCode">The error code.</param>
        /// <returns></returns>
        private static async Task<T> ExecuteQuery<T>(Func<Task<T>> func, ErrorCode errorCode)
        {
            try
            {
                return await func();
            }
            catch (Exception ex)
            {
                throw ProcessingFailureException.DatabaseQueryFailure(errorCode, ex);
            }
        }

        #endregion
    }
}
