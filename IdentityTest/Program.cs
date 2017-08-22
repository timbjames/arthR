namespace IdentityTest
{
    #region Usings

    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using IdentityModel.Client;
    using Newtonsoft.Json.Linq;

    #endregion

    internal static class Program
    {
        #region Private Methods

        private static void Main(/*string[] args*/)
        {
              MainAsync().GetAwaiter().GetResult();
        }

        private static async Task MainAsync()
        {
            DiscoveryResponse disco = await DiscoveryClient.GetAsync("http://localhost:5000");

            //var tokenClient = new TokenClient(disco.TokenEndpoint, "client", "secret");
            //var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");

            //if (tokenResponse.IsError)
            //{
            //    Console.WriteLine(tokenResponse.Error);
            //    return;
            //}

            //Console.WriteLine(tokenResponse.Json);


            var tokenClient = new TokenClient(disco.TokenEndpoint, "ro.client", "secret");
            TokenResponse tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync("alice", "password", "api1");

            if (tokenResponse.IsError)
            {
                Console.WriteLine(tokenResponse.Error);
                return;
            }

            Console.WriteLine(tokenResponse.Json);

            var client = new HttpClient();
            client.SetBearerToken(tokenResponse.AccessToken);

            HttpResponseMessage response = await client.GetAsync("http://localhost:5001/identity");
            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine(response.StatusCode);
            }
            else
            {
                string content = await response.Content.ReadAsStringAsync();
                Console.WriteLine(JArray.Parse(content));
            }

            Console.ReadLine();
        }

        #endregion
    }
}
