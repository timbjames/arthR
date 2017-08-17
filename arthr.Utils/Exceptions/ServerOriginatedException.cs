namespace arthr.Utils.Exceptions
{
    #region Usings

    using System;
    using Enums;

    #endregion

    public class ServerOriginatedException<T> : GenericException<T>
        where T : struct
    {
        #region Constructors

        protected ServerOriginatedException(ErrorCode errorCode, Exception inner, T reason, ExceptionPayload exceptionPayload = null)
            : base(errorCode, inner, reason, exceptionPayload)
        {
        }

        #endregion

        #region Public Methods

        public override IExceptionReport ToReport()
        {
            return new ExceptionReport<T>(this);
        }

        #endregion
    }
}
