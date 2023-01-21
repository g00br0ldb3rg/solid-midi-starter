//###  NPM  ###//
import Icons                    from "unplugin-icons/vite"
import {defineConfig}           from "vite"
import Solid                    from "vite-plugin-solid"
import Resolve_TSConfig_Aliases from "vite-tsconfig-paths"


//####################################################################################################################//
//##>  Exports                                                                                                      ##//
//####################################################################################################################//

	export default defineConfig({

		plugins: [
			Resolve_TSConfig_Aliases(),

			Icons({
				compiler:     "solid",
				defaultClass: "ICON",
			}),

			Solid({
				ssr: false,
			}),
		],

		server: {
			host:       "0.0.0.0",
			port:       3000,
			strictPort: true,
		},

		build: {
			target: "ESNext"
		},

	});
