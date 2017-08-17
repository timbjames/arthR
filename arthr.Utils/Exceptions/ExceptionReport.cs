namespace arthr.Utils.Exceptions
{
    #region Usings

    using System.Collections;
    using System.Collections.Generic;
    using Interfaces;

    #endregion

    public sealed class ExceptionReport<TReason> : IExceptionReport where TReason : struct
    {
        #region Constructors

        public ExceptionReport(GenericException<TReason> exception, IDictionary<string, IEnumerable<string>> modelStateErrorsReport = null)
        {
            Code = (int)exception.ErrorCode;
            Area = exception.ErrorCode.ToString();
            Data = exception.Data.Count == 0 ? null : exception.Data;
            Reason = exception.Reason.ToString();
            StackTrace = exception.StackTrace;

            ModelStateErrors = modelStateErrorsReport;

            if (exception.InnerException == null)
            {
                InnerExceptionJson = null;
                InnerExceptionText = null;
            }
            else
            {
                var typedException = exception.InnerException as IReportableException;
                if (typedException != null)
                {
                    InnerExceptionJson = typedException.ToReport();
                    InnerExceptionText = null;
                }
                else
                {
                    InnerExceptionJson = null;
                    InnerExceptionText = exception.InnerException.ToString();
                }
            }
        }

        #endregion

        #region Properties

        public string Area { get; }

        public int Code { get; }

        public IDictionary Data { get; }

        public object InnerExceptionJson { get; }

        public string InnerExceptionText { get; }

        public IDictionary<string, IEnumerable<string>> ModelStateErrors { get; }

        public string Reason { get; }

        public string StackTrace { get; }

        #endregion
    }
}
