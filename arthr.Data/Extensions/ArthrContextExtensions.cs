namespace arthr.Data.Extensions
{
    #region Usings

    using System;
    using Core;
    using SeedData;

    #endregion

    public static class ArthRContextExtensions
    {
        #region Properties

        private static bool PendingChanges { get; set; }

        #endregion

        #region Public Methods

        public static void EnsureSeedData(this ArthRContext context)
        {
            try
            {
                if (!context.AllMigrationsApplied())
                {
                    PrimarySeeding(context);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        #endregion

        #region Private Methods

        private static void PrimarySeeding(this ArthRContext context)
        {
            ISeedData seed = new StatusSeedData();
            PendingChanges = seed.Seed(context);
            SavePendingSeedingChanges(context);
        }

        private static void SavePendingSeedingChanges(this ArthRContext context)
        {
            if (PendingChanges)
            {
                context.SaveChanges();
                PendingChanges = false;
            }
        }

        #endregion
    }
}
