namespace arthr.Data.SeedData
{
    #region Usings

    using Core;

    #endregion

    public interface ISeedData
    {
        #region Public Methods

        bool Seed(ArthRContext arthRContext);

        #endregion
    }
}
