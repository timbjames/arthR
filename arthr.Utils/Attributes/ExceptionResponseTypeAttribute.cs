namespace arthr.Utils.Attributes
{
    #region Usings

    using System;
    using Exceptions;
    using Extensions;

    #endregion

    public enum ExceptionResponseType
    {
        /// <summary>
        /// Reasons: Model Binding Failure, Missing Post Parameters etc.
        /// </summary>
        BadRequest = 400,

        /// <summary>
        /// Reasons: Invalid permission.
        /// </summary>
        Forbidden = 403,

        /// <summary>
        /// Reasons: Record with Id doesn't exist etc.
        /// </summary>
        NotFound = 404,

        /// <summary>
        /// Reasons: Concurrency Errors, Unique Key Violations
        /// </summary>
        Conflict = 409,

        /// <summary>
        /// Reasons: Other Validation Errors.
        /// </summary>
        UnprocessableEntity = 422,

        /// <summary>
        /// Reasons: Invalid response from upstream server.
        /// </summary>
        BadGateway = 502,

        /// <summary>
        /// Reasons: Didn't receive a timely response from upstream server.
        /// </summary>
        GatewayTimeout = 504
    }

    [AttributeUsage(AttributeTargets.Field)]
    public sealed class ExceptionResponseTypeAttribute : Attribute
    {
        #region Fields

        private readonly ExceptionResponseType _exceptionResponseType;

        #endregion

        #region Constructors

        public ExceptionResponseTypeAttribute(ExceptionResponseType exceptionResponseType)
        {
            _exceptionResponseType = exceptionResponseType;
        }

        #endregion

        #region Public Methods

        public static ExceptionResponseType GetExceptionResponseType<T>(Enum reasonAsEnum)
        {
            ExceptionResponseType exceptionResponseType;

            try
            {
                exceptionResponseType = ReadFromValue(reasonAsEnum);
            }
            catch (EnumUtilityCodeException exception) when (exception.Reason == EnumUtilityCodeExceptionReason.EnumValueMissingAttribute)
            {
                throw EnumUtilityCodeException.MissingAttributesInEnum<T>(exception);
            }

            return exceptionResponseType;
        }

        #endregion

        #region Private Methods

        private static ExceptionResponseType ReadFromValue(Enum exceptionReason)
        {
            var exceptionResponseTypeAttribute = exceptionReason.GetAttribute<ExceptionResponseTypeAttribute>();

            if (exceptionResponseTypeAttribute == null)
            {
                throw EnumUtilityCodeException.EnumValueMissingAttribute<ExceptionResponseTypeAttribute>(exceptionReason);
            }

            return exceptionResponseTypeAttribute._exceptionResponseType;
        }

        #endregion
    }
}
