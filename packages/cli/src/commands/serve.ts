import path from "path";
import { Command } from "commander";
import { serve } from "@jbook-tmartinss/local-api";

const isProduction = process.env.NODE_ENV === 'production'

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "4005")
  .action(async (filename = "notebook.js", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir, !isProduction);
    } catch (err) {
      if (err instanceof Error) {
        console.log("Here's the problem", err.message);
      }
      process.exit(1);
    }
  });
