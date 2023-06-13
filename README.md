**C# GRPC Client and C# GRPC Server Implementation**

**GRPC (Google Remote Procedure Call)** It is used for communicating the client to server applications.

**C# Server**

**Step-1:**

`	`Create C# server application in visual studio. Create a new project-> search grpc-> select 	ASP.NET Core gRPC Service project and create the project.

**Step-2:**

`	`In “**Program.cs**” file add these cors origion to access the services from outside client 	applications

**Code:**

builder.Services.AddGrpc();

builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>

{

`    	`builder.AllowAnyOrigin()

.AllowAnyMethod()

.AllowAnyHeader()

.WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-	Encoding", "Grpc-Accept-Encoding");

}));

var app = builder.Build();

app.UseRouting();

app.UseCors();

app.UseEndpoints(endpoints =>

{

`    	`endpoints.MapGrpcService<GreeterService>().RequireCors("AllowAll");

});

**C# Client**

**Step-1:**

`	`Create the c# console application in visual studio. Create new project-> select c# console app

`	`Create the project.

**Step-2:**

`	`In solution create “**Protos”** folder, inside Protos folder create file with the extension of 		**“.proto” (greet.proto)**

`	`In .proto file need to add the services which is generated in “GRPC Server .proto file”.

`	`**Ex:**

`	`syntax = "proto3";

option csharp\_namespace = "grpc\_client";

package greet;



// The greeting service definition.

service Greeter {

`  `// Sends a greeting

`  `rpc SayHello (HelloRequest) returns (HelloReply);

}

// The request message containing the user's name.

message HelloRequest {

`  `string name = 1;

}



// The response message containing the greetings.

message HelloReply {

`  `string message = 1;

}

**Step-3:**

`	`In “**Program.cs**” file need to add the Grpc Client to Server connect code.

`	`**Ex:**

`	`using Grpc.Net.Client;

using grpc\_client;





Console.WriteLine("Hello, World!");





using var channel = GrpcChannel.ForAddress("http://localhost:5127");

var client = new Greeter.GreeterClient(channel);

var reply = await client.SayHelloAsync(

`                  `new HelloRequest { Name = "GreeterClient" });

Console.WriteLine("Greeting: " + reply.Message);

Console.WriteLine("Press any key to exit...");

Console.ReadKey();

Step-4:

`	`Run both client and server application, client will communicate the server application


  
  
  
  

**React GRPC Client and C# GRPC Server Implementation** 

`       `This implementation is not stable:(Not working properly)

**Step-1:**

`	`Create react project  ( **npx create-react-app  <app name>** )

**Step-2:**

`	`Install GRPC web ( **npm install grpc-web** )

**Step-3:**

`	`In project ‘src’ folder need to create the “ **.proto** ” file.

**Step-4:**

`	`Need to install the protoc compiler.  Path to download the protoc compiler    

( <https://github.com/protocolbuffers/protobuf/releases> ) filename: “**protoc-23.2-win64.zip**”

**Step-5:**

`	`After installing protoc file set the path in environment variables -> system variables-Path

(Protoc.exe file path). Check the version of protoc.exe ( **Protoc --version** )

**Step-6:**

`	 `Need to install “ Protoc-gen-js “ and “ Protoc-gen-grpc-web ” plugins

**Cmd1:**( **npm install -g Protoc-gen-js** ) check version: “ **Protoc-gen-js --version** “

**Cmd2:**( **npm install -g Protoc-gen-grpc-web** ) check version: “ **Protoc-gen-grpc-web --version**“

After installing these commands need to restart the PC

Add these two installed “ .exe ” paths in environment variables->system variables-> Path

**Ex:** “C:\Users\Raj\AppData\Roaming\npm\node\_modules\Protoc-gen-js\bin”

“C:\Users\Raj\AppData\Roaming\npm\node\_modules\Protoc-gen-grpc-web\bin”

**Step-7:** 

`	`Now open **GitBash** and install ProtobufJs Commands

`	`“ **npm install grpc-web Protobufjs** ” and “ **npm install grpc-web-google-Protobuf** ”

**Step-8:** 

`	`To Generate the Data in .js files based on the methods we added in .proto file. 

`	`**Cmd:** (Optional)

`	`“**Protoc -I=<your proto file folder path> --js\_out=import\_style=commonjs,binary:<Output Folder path> --grpc\_web\_out=import\_style=commonjs+dts,mode=grpcwebtext:<Output 	Folder path> <.proto file path>**”   it will generate the .ts file 

**Step-9:**

`	`Here we need to generate “ Protoc\_pb.js “ and “ Protoc\_grpc\_web\_pb.js “ files.

**Cmd1:**

protoc -I=D:/Practice/grpc-sample/src --js\_out=import\_style=commonjs,binary:D:/Practice/grpc-sample/src --grpc-web\_out=import\_style=commonjs+dts,mode=grpcwebtext:D:/Practice/grpc-sample/src D:/Practice/grpc-sample/src/protoFile.proto

`	`**Cmd2:**

`	`“Protoc --js\_out=import\_style=commonjs,binary:. --grpc-web\_web\_out=import\_style=commonjs,mode=grpcwebtext:. my-service.proto(.proto file name)”
