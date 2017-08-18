namespace arthr.Utils.Exceptions
{
    #region Usings

    using System;
    using Attributes;
    using Enums;
    using Interfaces;

    #endregion

    public enum CommonExceptionReason
    {
        [ExceptionResponseType(ExceptionResponseType.BadRequest)]
        IncompleteRequestModel,
        [ExceptionResponseType(ExceptionResponseType.NotFound)]
        NotFound
    }

    public sealed class CommonException : ClientOriginatedException<CommonExceptionReason>
    {
        #region Constructors

        private CommonException(Exception innerException, ErrorCode errorCode, CommonExceptionReason reason, object data)
            : base(errorCode, innerException, reason, ClientOriginatedExceptionPayload.WithData(data))
        {
        }

        #endregion

        #region Public Methods

        public static CommonException IncompleteRequestModel(ErrorCode errorCode, object data = null, Exception innerException = null)
        {
            return new CommonException(innerException, errorCode, CommonExceptionReason.IncompleteRequestModel, data);
        }

        public static CommonException NotFound(ErrorCode errorCode, object data = null, Exception innerException = null)
        {
            return new CommonException(innerException, errorCode, CommonExceptionReason.NotFound, data);
        }

        public static Exception UnexpectedException(ErrorCode errorCode, Exception inner, string message)
        {
            if (inner is IHttpExceptionResponse)
            {
                return inner;
            }

            string exceptionMessage = errorCode + " " + message;
            return new Exception(exceptionMessage, inner);
        }

        #endregion
    }
}
