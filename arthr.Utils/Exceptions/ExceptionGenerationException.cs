namespace arthr.Utils.Exceptions
{
    #region Usings

    using System;
    using Enums;

    #endregion

    public enum ExceptionGenerationExceptionReason
    {
        ExceptionDataSerializationFailure
    }

    public sealed class ExceptionGenerationException : ServerOriginatedException<ExceptionGenerationExceptionReason>
    {
        #region Constructors

        private ExceptionGenerationException(Exception innerException, ExceptionGenerationExceptionReason exceptionReason, ExceptionPayload exceptionPayload)
            : base(DefaultErrorCode, innerException, exceptionReason, exceptionPayload)
        {
        }

        #endregion

        #region Properties

        private static ErrorCode DefaultErrorCode => ErrorCode.UtilityCode;

        #endregion

        #region Public Methods

        public static ExceptionGenerationException DataSerializationFailure(ErrorCode sourceErrorCode, Enum reason, Exception innerException = null)
        {
            var data = new
            {
                SourceErrorCode = (int)sourceErrorCode,
                SourceErrorCodeName = sourceErrorCode.ToString(),
                SourceReasonCode = reason,
                SourceReasonName = reason.ToString()
            };

            return new ExceptionGenerationException(
                innerException,
                ExceptionGenerationExceptionReason.ExceptionDataSerializationFailure,
                ExceptionPayload.WithData(data));
        }

        #endregion
    }
}
