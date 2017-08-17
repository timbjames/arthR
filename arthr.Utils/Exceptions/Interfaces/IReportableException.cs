namespace arthr.Utils.Exceptions.Interfaces
{
    #region Usings

    #endregion

    public interface IReportableException
    {
        #region Public Methods

        IExceptionReport ToReport();

        #endregion
    }
}
