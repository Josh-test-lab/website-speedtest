# website-speedtest

Test the network connection quality between a user's device and my website
https://yao-chih.netlify.app/en/website-network-connection-speed-test/

## About

This project is a modified and simplified web-based speed test developed for my website.

The project is built with the [Hugo](https://gohugo.io/) static site generator and deployed on [Netlify](https://www.netlify.com/).

The speed test was modified from:

- [insoxin/html5-speedtest](https://github.com/insoxin/html5-speedtest)

which is a simplified version based on [LibreSpeed/speedtest](https://github.com/librespeed/speedtest)

The deployed version of this project can be accessed at
https://yao-chih.netlify.app/en/website-network-connection-speed-test/

## Project Structure

The following table describes the main files and directories included in this repository.

| File / Directory                                           | Description                                                                                                                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `js/speedtest_worker.min.js`                               | The speed test Web Worker script. This file is based on `static/speedtest/speedtest_worker.min.js` in the Hugo website directory.                                                    |
| `netlify_functions/speedtest_empty/speedtest_empty.js`     | A modified Netlify Function used by the speed test to handle empty test requests.                                                                                                    |
| `netlify_functions/speedtest_garbage/speedtest_garbage.js` | A modified Netlify Function used by the speed test to handle garbage-data requests.                                                                                                  |
| `index.html`                                               | A simplified front-end interface based on the demo interface from `insoxin/html5-speedtest`. The interface and displayed results may differ from the deployed version on my website. |
| `netlify.toml`                                             | Configuration file containing the Netlify Functions and redirect settings.                                                                                                           |

## Deployment

If you intend to deploy this project on your own website, some file paths and configuration settings may need to be modified to match your own deployment environment.

In particular, please check and update the following:

- Paths referenced by the front-end speed test.
- Netlify Function paths and redirect rules defined in `netlify.toml`.
- The locations of the speed test Web Worker and related static files.
- Any website-specific URLs or paths in `index.html`.
- Any Hugo-specific paths used by the project.

The exact paths that need to be changed may vary depending on your Hugo site structure and deployment configuration. Before deploying, please review the references to the original website and Netlify Functions and replace them with the corresponding paths for your own environment.

## Hugo Version

This project was developed using:

```text
Hugo v0.145.0
```

## License

This project is distributed under the terms of the **GNU Lesser General Public License, Version 3 (LGPL-3.0)**, as originally applicable to the upstream project.

The relevant license is:

> GNU LESSER GENERAL PUBLIC LICENSE
> Version 3, 29 June 2007

Please refer to the [`LICENSE`](LICENSE) file for the complete license text.

Because this project is a modified version of existing open-source software, the original authors and upstream projects retain their respective copyrights and licenses.

## Attribution

This project is derived from the following open-source projects:

1. **insoxin/html5-speedtest**
   https://github.com/insoxin/html5-speedtest

2. **LibreSpeed/speedtest**
   https://github.com/librespeed/speedtest

Please refer to the respective upstream repositories for their original source code, copyright notices, and licensing information.

## Modifications

This repository contains modifications made to adapt the original speed test for use with a Hugo-based static website and Netlify Functions.

The modifications primarily include:

- Adapting the speed test for deployment on Netlify.
- Modifying the server-side endpoints to work with Netlify Functions.
- Simplifying the original demonstration interface.
- Integrating the speed test into a Hugo static website.
- Adjusting the front-end and server-side behavior for the intended website environment.

## Purpose

This speed test is intended to test the network connection quality between the user's device and the website hosting environment.

It is **not intended to measure the user's overall Internet connection speed**, nor should the results be considered a replacement for a dedicated Internet speed-testing service.

The measured results can be affected by factors such as:

- The user's network environment.
- The user's device and browser.
- Network congestion.
- The route between the user and the server.
- Server-side resource limitations.
- Netlify infrastructure and network conditions.

## Disclaimer

The test results are provided for informational and diagnostic purposes only.

This project is designed specifically to test the connection quality between the user's device and the website's server environment. It should not be used as an authoritative measurement of the user's Internet service provider, maximum Internet bandwidth, or overall network performance.

## Upstream Projects

For more information about the original projects, please visit:

- https://github.com/insoxin/html5-speedtest
- https://github.com/librespeed/speedtest

## Copyright and License Notice

This repository contains modified source code derived from third-party open-source software. The applicable copyright notices and license requirements of the original projects must be preserved in accordance with the terms of the LGPL-3.0 license.

For the complete license terms, see:

https://www.gnu.org/licenses/lgpl-3.0.html
