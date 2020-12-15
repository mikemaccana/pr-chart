import { Request, Response } from "../../shared/architect-types";
import { STATUSES, CONTENT_TYPES, stringify, log } from "../../shared/utils";

const STATIC_DIR = "/_static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>PR summary</title>

	<link rel='icon' type='image/png' href='${STATIC_DIR}/images/favicon.png'>
	<link rel='stylesheet' href='${STATIC_DIR}/css/global.css'>
  <link rel='stylesheet' href='${STATIC_DIR}/build/bundle.css'>
  
  <script>
    document.write('<script src="http://' + location.hostname +
  ':35729/livereload.js?snipver=1"></' + 'script>')
  </script> 

	<script defer src='${STATIC_DIR}/build/bundle.js'></script>
</head>

<body>
</body>
</html>`;

export async function handler(request: Request): Promise<Response> {
  return {
    statusCode: STATUSES.OK,
    headers: {
      "Content-Type": CONTENT_TYPES.html,
    },
    body: html,
  };
}
