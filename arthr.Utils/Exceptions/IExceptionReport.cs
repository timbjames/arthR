namespace arthr.Utils.Exceptions
{
    #region Usings

    using System.Collections;
    using System.Collections.Generic;

    #endregion

    public interface IExceptionReport
    {
        #region Properties

        string Area { get; }

        int Code { get; }

        IDictionary Data { get; }

        object InnerExceptionJson { get; }

        string InnerExceptionText { get; }

        IDictionary<string, IEnumerable<string>> ModelStateErrors { get; }

        string Reason { get; }

        string StackTrace { get; }

        #endregion
    }
}
