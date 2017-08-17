namespace arthr.Utils.Exceptions
{
    #region Usings

    using System;
    using Enums;
    using Interfaces;

    #endregion

    public abstract class GenericException<T> : Exception, IErrorCoded, IReportableException
        where T : struct
    {
        #region Constructors

        protected GenericException(ErrorCode errorCode, Exception inner, T reason, ExceptionPayload exceptionPayload = null)
            : base(reason.ToString(), UnwrapAggregate(inner))
        {
            ErrorCode = errorCode;
            Reason = reason;

            try
            {
                if (exceptionPayload?.Data != null)
                {
                    AddData(exceptionPayload.Data);
                }
            }
            catch (Exception ex)
            {
                var reasonAsEnum = reason as Enum;
                throw ExceptionGenerationException.DataSerializationFailure(errorCode, reasonAsEnum, ex);
            }
        }

        #endregion

        #region Properties

        public ErrorCode ErrorCode { get; }

        public T Reason { get; }

        #endregion

        #region Interface Implementations

        /// <summary>
        /// Converts the exception to a report.
        /// </summary>
        /// <returns></returns>
        public abstract IExceptionReport ToReport();

        #endregion

        #region Public Methods

        /// <summary>
        /// Returns a <see cref="System.String" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="System.String" /> that represents this instance.
        /// </returns>
        public override string ToString()
        {
            string result = ErrorCode + " : " + Reason + " : " + Message + " >>> " + StackTrace;

            if (InnerException == null)
            {
                return result;
            }

            return result + " InnerException { " + InnerException + " } ";
        }

        #endregion

        #region Protected Methods

        /// <summary>
        /// Unwraps the aggregate exception.
        /// </summary>
        /// <param name="exception">The exception.</param>
        /// <returns></returns>
        protected static Exception UnwrapAggregate(Exception exception)
        {
            var aggregateException = exception as AggregateException;
            return aggregateException?.Flatten().InnerException ?? exception;
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Adds data to the exception.
        /// </summary>
        /// <param name="data">The data.</param>
        // ReSharper disable once UnusedParameter.Local
        private void AddData(object data)
        {
            //foreach (KeyValuePair<string, object> entry in new RouteValueDictionary(data))
            //{
            //    Data.Add(entry.Key, entry.Value);
            //}
        }

        #endregion
    }
}
