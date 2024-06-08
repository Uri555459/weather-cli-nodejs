#!/usr/bin/env node
import { getArgs } from './helpers/args.js'

const initCLI = () => {
	const args = getArgs(process.argv)
	console.log(args)
	if (args.h) {
		// show help
	}
	if (args.s) {
		// save
	}
	if (args.t) {
		// show weather
	}
}

initCLI()
