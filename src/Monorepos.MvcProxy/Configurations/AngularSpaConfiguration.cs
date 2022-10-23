using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;

namespace Monorepos.MvcProxy.Configurations
{
    public static class AngularSpaConfiguration
    {
        public static void UseAngularSpaConfiguration(this IApplicationBuilder app, IWebHostEnvironment env, IConfiguration configuration)
        {
            ConfigureMappedAngularApp(app, env, configuration["ClientMyApp1:Url"], configuration["ClientMyApp1:Arquivos"],
                configuration["ClientMyApp1:Proxy"]);
            ConfigureMappedAngularApp(app, env, configuration["ClientMyApp2:Url"], configuration["ClientMyApp2:Arquivos"],
                configuration["ClientMyApp2:Proxy"]);
        }

        private static void ConfigureMappedAngularApp(IApplicationBuilder app, IWebHostEnvironment env, string url, string arquivos, string proxy)
        {
            app.Map(new PathString(url), angularApp =>
            {
                string angularAppPath = Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), arquivos));
                var angularAppFileOptions = new StaticFileOptions();
                angularAppFileOptions.FileProvider = new PhysicalFileProvider(angularAppPath);

                angularApp.UseSpaStaticFiles(angularAppFileOptions);

                angularApp.UseSpa(spa =>
                {
                    spa.Options.StartupTimeout = new TimeSpan(0, 5, 0);
                    spa.Options.SourcePath = arquivos;

                    if (env.IsEnvironment("Development"))
                    {
                        spa.UseProxyToSpaDevelopmentServer(proxy);
                    }
                    else
                    {
                        spa.Options.DefaultPageStaticFileOptions = angularAppFileOptions;
                    }
                });
            });
        }
    }
}
