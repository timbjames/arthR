namespace arthr.Utils.Exceptions
{
    #region Usings

    using System;
    using Enums;

    #endregion

    public enum ProcessingFailureExceptionReason
    {
        ConcurrencyFailure,
        ConstraintViolation,
        DatabaseQueryFailure,
        EntityNotFound,
        SaveFailure
    }

    public sealed class ProcessingFailureException : ServerOriginatedException<ProcessingFailureExceptionReason>
    {
        #region Constructors

        private ProcessingFailureException(Exception innerException, ErrorCode errorCode, ProcessingFailureExceptionReason reason, ExceptionPayload exceptionPayload)
            : base(errorCode, UnwrapAggregate(innerException), reason, exceptionPayload)
        {
        }

        #endregion

        #region Public Methods

        public static ProcessingFailureException ConcurrencyFailure(ErrorCode errorCode, object data = null, Exception innerException = null)
        {
            return new ProcessingFailureException(innerException, errorCode, ProcessingFailureExceptionReason.ConcurrencyFailure, ExceptionPayload.WithData(data));
        }

        public static ProcessingFailureException ConstraintViolation(ErrorCode errorCode, object data = null, Exception innerException = null)
        {
            return new ProcessingFailureException(innerException, errorCode, ProcessingFailureExceptionReason.ConstraintViolation, ExceptionPayload.WithData(data));
        }

        public static ProcessingFailureException DatabaseQueryFailure(ErrorCode errorCode, object data = null, Exception innerException = null)
        {
            return new ProcessingFailureException(innerException, errorCode, ProcessingFailureExceptionReason.DatabaseQueryFailure, ExceptionPayload.WithData(data));
        }

        public static ProcessingFailureException EntityNotFound(ErrorCode errorCode, Exception innerException = null)
        {
            return new ProcessingFailureException(innerException, errorCode, ProcessingFailureExceptionReason.EntityNotFound, null);
        }

        public static ProcessingFailureException SaveFailure(ErrorCode errorCode, Exception innerException, object data = null)
        {
            return new ProcessingFailureException(innerException, errorCode, ProcessingFailureExceptionReason.SaveFailure, ExceptionPayload.WithData(data));
        }

        #endregion
    }
}
