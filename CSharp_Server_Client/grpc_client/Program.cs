// See https://aka.ms/new-console-template for more information
using System.Threading.Tasks;
using Grpc.Net.Client;
using grpc_client;


Console.WriteLine("Hello, World!");


using var channel = GrpcChannel.ForAddress("http://localhost:5127");
var client = new Greeter.GreeterClient(channel);
var reply = await client.SayHelloAsync(
                  new HelloRequest { Name = "GreeterClient" });
Console.WriteLine("Greeting: " + reply.Message);
Console.WriteLine("Press any key to exit...");
Console.ReadKey();