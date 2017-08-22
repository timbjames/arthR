namespace arthr.Business.Exceptions
{
    #region Usings

    using System;
    using Utils.Attributes;
    using Utils.Exceptions;
    using Utils.Exceptions.Enums;

    #endregion

    public enum UserExceptionReason
    {
        [ExceptionResponseType(ExceptionResponseType.BadRequest)]
        UserPasswordRequiresReset,

        [ExceptionResponseType(ExceptionResponseType.NotFound)]
        UserNotFound
    }

    public sealed class UserException : ClientOriginatedException<UserExceptionReason>
    {
        #region Constructors

        private UserException(Exception innerException, UserExceptionReason exceptionReason, object data = null)
            : base(DefaultErrorCode, innerException, exceptionReason, ClientOriginatedExceptionPayload.WithData(data))
        {
        }

        #endregion

        #region Properties

        private static ErrorCode DefaultErrorCode => ErrorCode.User;

        #endregion

        #region Public Methods

        public static UserException NotFound(Exception innerException = null)
        {
            return new UserException(innerException, UserExceptionReason.UserNotFound);
        }

        public static UserException RequiresPasswordReset(Exception innerException = null)
        {
            return new UserException(innerException, UserExceptionReason.UserPasswordRequiresReset);
        }

        #endregion
    }
}
