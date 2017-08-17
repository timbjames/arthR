namespace arthr.Utils.Extensions
{
    #region Usings

    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;
    using System.Reflection;

    #endregion

    public static class EnumExtensions
    {
        #region Public Methods

        /// <summary>
        /// A generic extension method that aids in reflecting
        /// and retrieving any attribute that is applied to an `Enum`.
        /// </summary>
        /// <typeparam name="TAttribute">The type of the attribute.</typeparam>
        /// <param name="enumValue">The enum value.</param>
        /// <returns></returns>
        public static TAttribute GetAttribute<TAttribute>(this Enum enumValue)
            where TAttribute : Attribute
        {
            return enumValue.GetType()
                .GetMember(enumValue.ToString())
                .First()
                .GetCustomAttribute<TAttribute>();
        }

        /// <summary>
        /// Returns the Displayname for an enum
        /// </summary>
        /// <param name="enumType">the Enum Type</param>
        /// <returns></returns>
        public static string ToDisplayName(this Enum enumType)
        {
            return enumType.GetAttribute<DisplayAttribute>().Name;
        }

        #endregion
    }
}
