/*
 * Copyright 2019 pystol.org - All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author: Carlos Camacho <carloscamachoucv@gmail.com>
 */

var corssproxy = 'https://cors-anywhere.herokuapp.com/';
var badges = [
{
  type: 'text',
	size:{x:2,y:1},
	position:{x:1,y:1},
	title: "The chaos toolbox",
	subtitle: 'CI dashboard status',
	description: 'GitHub actions reports',
	link: 'http://www.bing.com',
	color:'widget-text',
},
{
  type: 'picture',
	size:{x:2,y:1},
	position:{x:3,y:1},
	src:'assets/images/logo.png',
	color:'widget-logo',
},
{
  type: 'clock',
	size:{x:2,y:1},
	position:{x:5,y:1},
	color:'widget-meter',
},
{
  type: 'badge',
	size:{x:1,y:1},
	position:{x:1,y:2},
  uri: corssproxy + 'https://github.com/pystol/pystol/workflows/docker-image-build/badge.svg?event=push',
	title: "Docker build",
	description: 'Local image creation',
	link: 'http://www.bing.com',
	measure:{x:175,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
	size:{x:1,y:1},
	position:{x:2,y:2},
  uri: corssproxy + 'https://github.com/pystol/pystol/workflows/nodejs-install-build/badge.svg?event=push',
	title: "NodeJS",
	description: 'Installing NodeJS',
	link: 'http://www.bing.com',
	measure:{x:175,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:3,y:2},
	uri: corssproxy + 'https://github.com/pystol/pystol/workflows/tox-nodeunits-build/badge.svg?event=push',
	title: "NodeJS",
	description: 'Tox unit testing',
	link: 'http://www.bing.com',
	measure:{x:163,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:4,y:2},
	uri: corssproxy + 'https://github.com/pystol/pystol/workflows/tox-flake-build/badge.svg?event=push',
	title: "Flake8",
	description: 'Tox Python syntax',
	link: 'http://www.bing.com',
	measure:{x:127,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:5,y:2},
	uri: corssproxy + 'https://github.com/pystol/pystol/workflows/tox-pytest-build/badge.svg?event=push',
	title: "Pytest",
	description: 'Tox Python unit testing',
	link: 'http://www.bing.com',
	measure:{x:143,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:6,y:2},
	uri: corssproxy + 'https://github.com/pystol/pystol/workflows/tox-eslint-build/badge.svg?event=push',
	title: "ESlint",
	description: 'Tox JS linting job',
	link: 'http://www.bing.com',
	measure:{x:140,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:1,y:3},
	uri: corssproxy + 'https://github.com/pystol/pystol/workflows/tox-checktools-build/badge.svg?event=push',
	title: "Check tools",
	description: 'Check scripts from tools/',
	link: 'http://www.bing.com',
	measure:{x:143,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:2,y:3},
	uri: corssproxy + 'https://github.com/pystol/pystol-docs/workflows/jekyll-docs-build/badge.svg?event=push',
	title: "Pystol docs",
	description: 'Documentation build',
	link: 'http://www.bing.com',
	measure:{x:133,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:3,y:3},
	uri: corssproxy + 'https://quay.io/repository/pystol/pystol-operator-staging/status',
	title: "Quay.io",
	description: 'Staging image status',
	link: 'http://www.bing.com',
	measure:{x:81,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','149,195,14']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:4,y:3},
	uri: corssproxy + 'https://quay.io/repository/pystol/pystol-operator-stable/status',
	title: "Quay.io",
	description: 'Stable image status',
	link: 'http://www.bing.com',
  measure:{x:81,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','149,195,14']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:5,y:4},
	uri: corssproxy + 'https://github.com/pystol/pystol/workflows/e2e-deploy-base-build/badge.svg?event=push',
	title: "E2E base",
	description: 'e2e install test',
	link: 'http://www.bing.com',
  measure:{x:150,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
	type: 'badge',
	size:{x:1,y:1},
	position:{x:1,y:4},
  uri: corssproxy + 'https://img.shields.io/github/issues/pystol/pystol',
	title: "GitHub issues",
	description: 'Operator bug reports',
	link: 'https://github.com/pystol/pystol/issues',
	measure:{x:61,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','75,197,29']],
},
{
	type: 'badge',
	size:{x:1,y:1},
	position:{x:2,y:4},
  uri: corssproxy + 'https://bestpractices.coreinfrastructure.org/projects/3331/badge',
	title: "CII",
	description: 'Best practices check',
	link: 'https://bestpractices.coreinfrastructure.org/en/projects/3331',
	measure:{x:170,y:3},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82']],
},
{
  type: 'badge',
 	size:{x:1,y:1},
 	position:{x:3,y:4},
	uri: corssproxy + 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
	title: "License",
	description: 'Apache license check',
	link: 'http://www.bing.com',
	measure:{x:93,y:5},
	colors:[['status-warning','212,52,67'],['status-danger','197,105,30'],['status-good','48,196,82'],['widget-ocean','14,127,191']],
},
];
