import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import RecommendedPosts from '../src/components/RecommendedPosts';
import '../src/css/mobile.css';
import '../src/css/typography.css';
import '../src/css/subscribe.css';

window.___loader = { enqueue: () => null };

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

let recProps = {
  post: {
    title: 'My Favorite Interview Question',
    keywords: 'hiring interview internet',
    category: 'software-productivity',
    readNext: 'ten-things-js,jest-git,orthogonality-css-js',
    date: '2017-07-24 11:45:00+00:00',
    path: '/2017/07/24/my-favorite-interview-question/',
    layout: 'post',
    hideFooter: null
  },
  pages: [
    {
      title: '',
      date: null,
      path: '/404.html',
      description: null,
      category: null,
      dontfeature: null,
      key: null
    },
    {
      title: 'A note to recruiters',
      date: '2015-06-04 13:42:18+00:00',
      path: '/a-note-to-recruiters',
      description: null,
      category: null,
      dontfeature: null,
      key: null
    },
    {
      title: 'About Me',
      date: null,
      path: '/about',
      description: null,
      category: null,
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014',
      date: null,
      path: '/learning-vim-in-2014',
      description: 'A series of beginner level articles on Vim',
      category: null,
      dontfeature: null,
      key: 'learning-vim'
    },
    {
      title: 'Marionette: Explained',
      date: null,
      path: '/marionette-explained',
      description: 'A series of posts explaining Marionette.js',
      category: null,
      dontfeature: null,
      key: 'mn-series'
    },
    {
      title: 'Speaking',
      date: null,
      path: '/speaking',
      description: 'A list of my past talks at meetups and conferences',
      category: null,
      dontfeature: null,
      key: null
    },
    {
      title: '',
      date: null,
      path: '/subscribe',
      description: null,
      category: null,
      dontfeature: null,
      key: null
    },
    {
      title: 'Recommended Reading For Developers',
      date: null,
      path: '/readinglist',
      description: null,
      category: null,
      dontfeature: null,
      key: null
    },
    {
      title: 'Awesome Software: Trello',
      date: '2012-12-20 12:00:00+00:00',
      path: '/2012/12/20/awesome-software-trello',
      description: 'A quick review of the project management app Trello',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title: 'Bayesian Witch Hunt',
      date: '2012-11-09 12:00:00+00:00',
      path: '/2012/11/09/bayesian-witch-hunt',
      description: 'A nerd tribute from a friend',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Cleaning My Digital House',
      date: '2012-12-29 01:00:00+00:00',
      path: '/2012/12/29/cleaning-my-digital-house',
      description: 'Organizing what software I use',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'I hate computing ecosystems',
      date: '2012-12-29 23:06:00+00:00',
      path: '/2012/12/29/i-hate-computing-ecosystems',
      description: 'Why does nothing work together?',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'It took a month to get sick of php',
      date: '2012-10-06 11:00:00+00:00',
      path: '/2012/10/06/it-took-a-month-to-get-sick-of-php',
      description: 'Porting my blog from Wordpress to Python',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'Medium: The end of History and the last website',
      date: '2012-12-25 21:00:00+00:00',
      path: '/2012/12/25/medium-the-end-of-history-and-the-last-website',
      description: 'Is there any use in personal websites anymore?',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Shutdown Tiles for Windows 8 Start Screen',
      date: '2012-11-08 12:00:00+00:00',
      path: '/2012/11/08/shutdown-tiles-for-windows-8-start-screen',
      description: 'A solve for shutting down Windows 8 easily',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Sublime Text For Javascript: Keyboard Shortcuts',
      date: '2012-12-30 21:00:00+00:00',
      path: '/2012/12/30/sublime-text-for-javascript-keyboard-shortcuts',
      description: 'Helpful keyboard shortcuts for JS developers',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'The iPhone 5 Conversation so Far',
      date: '2012-09-19 11:00:00+00:00',
      path: '/2012/09/19/the-iphone-5-conversation-so-far',
      description: 'The same conversation just keeps happening',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Sync Multiple Google Calendars in Windows 8',
      date: '2012-11-07 12:00:00+00:00',
      path: '/2012/11/07/sync-multiple-google-calendars-in-windows-8',
      description: 'A helpful tip for using Google Calendar in Windows 8',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: '90% Done, Halfway There',
      date: '2013-06-09 18:45:00+00:00',
      path: '/2013/06/09/90-done-halfway-there',
      description:
        'A post on the difficulties of estimating development projects',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'BlendConf 2013: Takeaways From A Very Human Tech Conference',
      date: '2013-09-10 20:00:00+00:00',
      path:
        '/2013/09/10/blendconf-2013-takeaways-from-a-very-human-tech-conference',
      description: 'My takeaways from BlendConf',
      category: 'software-productivity',
      dontfeature: null,
      key: null
    },
    {
      title: 'A New Look',
      date: '2013-04-06 17:00:00+00:00',
      path: '/2013/04/06/a-new-look',
      description: 'A clean redesign for benmccormick.org',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'Book Review: Effective Javascript',
      date: '2013-01-06 22:00:00+00:00',
      path: '/2013/01/06/book-review-effective-javascript',
      description: 'A book review of Effective Javascript by David Herman',
      category: 'reviews',
      dontfeature: null,
      key: 'effective-js'
    },
    {
      title: 'Book Review: User-Centered Design',
      date: '2013-08-12 15:15:00+00:00',
      path: '/2013/08/12/book-review-user-centered-design',
      description: 'A book review of User-Centered Design by Travis Lowdermilk',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title: 'Book Review: Javascript Testing with Jasmine',
      date: '2013-04-23 20:30:00+00:00',
      path: '/2013/04/23/book-review-javascript-testing-with-jasmine',
      description:
        'A book review of JavaScript Testing with Jasmine by Evan Hahn',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title:
        'Career Fairs: How To Not Get Hired (And How To Give Yourself A Chance)',
      date: '2013-01-25 19:30:00+00:00',
      path:
        '/2013/01/25/career-fairs-how-to-not-get-hired-and-how-to-give-yourself-a-chance',
      description: 'What to do when you want a job',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Coffeescript Is Great',
      date: '2013-02-23 23:50:00+00:00',
      path: '/2013/02/23/coffeescript-is-great',
      description: null,
      category: 'javascript',
      dontfeature: null,
      key: null
    },
    {
      title: 'Customer Culture Revisited',
      date: '2013-06-08 18:45:00+00:00',
      path: '/2013/06/08/customer-culture-revisited',
      description: 'Talking about how Microsoft culture impacts their products',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Creating a Build System For a Coffeescript Project with Ant',
      date: '2013-03-23 16:23:00+00:00',
      path:
        '/2013/03/23/creating-a-build-system-for-a-coffeescript-project-with-ant',
      description: 'Using Ant to build my coffeescript projects',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Evergreen Browsers',
      date: '2013-06-11 18:45:00+00:00',
      path: '/2013/06/11/evergreen-browsers',
      description: 'A look at the future of browsers',
      category: 'platform',
      dontfeature: null,
      key: null
    },
    {
      title: 'Explaining Javascript: Closures',
      date: '2013-01-08 23:30:00+00:00',
      path: '/2013/01/08/explaining-javascript-closures',
      description: 'Diving into one of JavaScripts more confusing concepts',
      category: 'javascript',
      dontfeature: null,
      key: 'closures'
    },
    {
      title: 'Explaining Javascript: Object Oriented Programming',
      date: '2013-01-12 03:05:00+00:00',
      path: '/2013/01/12/explaining-javascript-object-oriented-programming',
      description:
        'A look at Object Oriented programming principles in JavaScript',
      category: 'javascript',
      dontfeature: null,
      key: null
    },
    {
      title: 'How I Use Stack Overflow',
      date: '2013-06-11 21:19:00+00:00',
      path: '/2013/06/11/how-i-use-stack-overflow',
      description: 'Getting the most out of Stack Overflow',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'How I Work:  Refactoring',
      date: '2013-02-03 21:00:00+00:00',
      path: '/2013/02/03/how-i-work-refactoring',
      description: 'Describing the process that goes behind refactoring code',
      category: 'software-productivity',
      dontfeature: null,
      key: null
    },
    {
      title: 'Irreplaceable',
      date: '2013-05-04 17:00:00+00:00',
      path: '/2013/05/04/irreplaceable',
      description: "Your job doesn't need you.  Your family does",
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Meetings And Concurrency',
      date: '2013-12-30 11:00:00+00:00',
      path: '/2013/12/30/meetings-and-concurrency',
      description: 'The trouble with in-person meetings',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Modern Dojo: Exploring declare',
      date: '2013-11-14 23:15:00+00:00',
      path: '/2013/11/14/modern-dojo-exploring-dojo_basedeclare',
      description: 'A dive into the _base/declare module',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Modern Dojo: Exploring query',
      date: '2013-11-13 23:15:00+00:00',
      path: '/2013/11/13/modern-dojo-exploring-dojoquery',
      description: 'A dive into the query module',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Revertible Observables in Knockout',
      date: '2013-05-07 20:05:00+00:00',
      path: '/2013/05/07/revertible-observables-in-knockout',
      description: 'Building an observable with simple undo functionality',
      category: 'frameworks',
      dontfeature: null,
      key: 'revertible-observables'
    },
    {
      title: 'RSS Roundup',
      date: '2013-06-29 11:40:00+00:00',
      path: '/2013/06/29/rss-roundup',
      description: 'A look at the options for RSS readers post-Google Reader',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title:
        'Searching for the perfect reading device:  My Nexus 7 (2013) Review',
      date: '2013-08-16 12:00:00+00:00',
      path:
        '/2013/08/16/searching-for-the-perfect-reading-device-my-nexus-7-2013-review',
      description: 'Reviewing a small Android Tablet',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title: 'Simple Publish-Subscribe with jQuery',
      date: '2013-02-13 21:00:00+00:00',
      path: '/2013/02/13/simple-publish-subscribe-with-jquery',
      description: 'Building a basic pub-sub wrapper around jQuery',
      category: 'frameworks',
      dontfeature: null,
      key: 'jquery-pub-sub'
    },
    {
      title: 'Somewhat Open',
      date: '2013-08-15 16:15:00+00:00',
      path: '/2013/08/15/somewhat-open',
      description: 'What is an open API?',
      category: 'opinion',
      dontfeature: null,
      key: null
    },
    {
      title: 'Sublime Text For Javascript: Configuration',
      date: '2013-01-01 18:00:00+00:00',
      path: '/2013/01/01/sublime-text-for-javascript-configuration',
      description: 'Helpful configuration options for JS developers',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Sublime Text For Javascript: Packages',
      date: '2013-01-03 21:00:00+00:00',
      path: '/2013/01/03/sublime-text-for-javascript-plugins',
      description: 'Helpful packages for JS developers',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: "Unexpected Javascript: That Doesn't Do What You Think",
      date: '2013-01-15 23:30:00+00:00',
      path: '/2013/01/15/unexpected-javascript-that-doesnt-do-what-you-think',
      description: 'A quiz for JavaScript developers',
      category: 'javascript',
      dontfeature: null,
      key: null
    },
    {
      title: 'A Quick Review Of Google Inbox',
      date: '2014-11-04 03:45:30+00:00',
      path: '/2014/11/04/a-quick-review-of-google-inbox',
      description: "A product review of Google's new email UI",
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title: 'Thoughts on Angular 2.0',
      date: '2014-11-08 19:24:09+00:00',
      path: '/2014/11/08/all-about-angular-2-0',
      description: 'An early look at the next version of Angular',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Building Complex Layouts With Marionette.js',
      date: '2014-12-22 04:43:47+00:00',
      path: '/2014/12/22/building-complex-layouts-with-marionette-js',
      description: 'How to build complex UIs with Marionette.js',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Alternative JavaScript',
      date: '2014-11-24 03:58:00+00:00',
      path: '/2014/11/24/alternative-javascript',
      description:
        'A non-comprehensive run-through of the various compile to JS languages out there',
      category: 'javascript',
      dontfeature: null,
      key: null
    },
    {
      title: 'Come Build With Me',
      date: '2014-12-18 14:00:00+00:00',
      path: '/2014/12/18/come-build-with-me',
      description:
        'A call for Software Developers to come join me at Windsor Circle',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'Component Based Development',
      date: '2014-08-07 11:30:00+00:00',
      path: '/2014/08/07/component-based-development',
      description:
        'Exploring the Web Components spec, and the future of web architecture',
      category: 'platform',
      dontfeature: null,
      key: 'component-based-dev'
    },
    {
      title: 'Custom Elements By Example',
      date: '2014-08-28 12:33:00+00:00',
      path: '/2014/08/28/custom-elements-by-example',
      description: 'Explaining Custom Elements and the Web Components spec',
      category: 'platform',
      dontfeature: null,
      key: 'custom-elements-example'
    },
    {
      title: 'Digging Into Knockout Builds',
      date: '2014-01-06 23:30:00+00:00',
      path: '/2014/01/06/digging-into-knockout-builds',
      description: 'An in depth look at how KnockoutJS is organized',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Discovering Vim',
      date: '2014-06-02 22:00:00+00:00',
      path: '/2014/06/02/discovering-vim',
      description: "The benefits I've found learning Vim",
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014: Configuring Vim',
      date: '2014-07-14 10:50:00+00:00',
      path: '/2014/07/14/learning-vim-in-2014-configuring-vim',
      description: 'How to set up a modern vim config',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014: Copy and Paste the Vim Way',
      date: '2014-07-27 23:00:00+00:00',
      path: '/2014/07/27/learning-vim-in-2014-copy-and-paste-the-vim-way',
      description: 'How to use copy and paste in Vim',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014: Getting More from Vim with Plugins',
      date: '2014-07-21 10:50:00+00:00',
      path:
        '/2014/07/21/learning-vim-in-2014-getting-more-from-vim-with-plugins',
      description: 'How plugins fit into a Vim workflow',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014: Search',
      date: '2014-08-04 01:16:20+00:00',
      path: '/2014/08/04/learning-vim-in-2014-search',
      description: 'How to search for anything in Vim',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014: The Basics',
      date: '2014-06-30 11:28:00+00:00',
      path: '/2014/06/30/learning-vim-in-2014-the-basics',
      description: 'The basics of learning Vim',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Learning Vim in 2014: Vim as Art',
      date: '2014-07-16 10:41:00+00:00',
      path: '/2014/07/16/learning-vim-in-2014-vim-as-art',
      description: 'How using Vim is more of an artform than a science',
      category: 'tools',
      dontfeature: null,
      key: 'vim-art'
    },
    {
      title: 'Learning Vim in 2014: Vim as Language',
      date: '2014-07-02 11:27:00+00:00',
      path: '/2014/07/02/learning-vim-in-2014-vim-as-language',
      description: 'An explanation of the grammar behind Vim',
      category: 'tools',
      dontfeature: null,
      key: 'vim-language'
    },
    {
      title: 'Learning Vim in 2014: Working with Files',
      date: '2014-07-07 11:10:37+00:00',
      path: '/2014/07/07/learning-vim-in-2014-working-with-files',
      description: 'How to easily navigate the file system in Vim',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Marionette Explained: Connecting Data to Your Views',
      date: '2014-12-10 12:30:00+00:00',
      path:
        '/2014/12/10/marionette-explained-connecting-your-data-to-your-views',
      description: 'How to bind data to your views in Marionette.js',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'New Twitter Feed and Practical Vim Giveaway',
      date: '2014-07-11 11:12:00+00:00',
      path: '/2014/07/11/new-twitter-feed-and-practical-vim-giveaway',
      description: 'New ways to subscribe',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'One Day Left In Practical Vim Giveaway',
      date: '2014-07-24 23:55:45+00:00',
      path: '/2014/07/24/one-day-left-in-practical-vim-giveaway',
      description: "If you're reading this now... its too late sorry ¯ (ツ)_/¯",
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'Setting Up Your Text Editor For JavaScript Development',
      date: '2014-10-13 01:05:51+00:00',
      path:
        '/2014/10/13/setting-up-your-text-editor-for-javascript-development',
      description:
        'A look at some tools and plugins that help create a productive JavaScript development workflow',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'The Case For Marionette.js',
      date: '2014-12-02 01:53:52+00:00',
      path: '/2014/12/02/the-case-for-marionette-js',
      description:
        'Making the case for Marionette.js as a framework for front end development',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'The Debugging Toolbox',
      date: '2014-08-19 11:35:00+00:00',
      path: '/2014/08/19/the-debugging-toolbox',
      description: 'The process I use for solving problems',
      category: 'software-productivity',
      dontfeature: null,
      key: null
    },
    {
      title: 'Underscore vs Lo-Dash',
      date: '2014-11-12 13:00:00+00:00',
      path: '/2014/11/12/underscore-vs-lodash',
      description: 'A comparison between Underscore and lodash',
      category: 'frameworks',
      dontfeature: null,
      key: 'underscore-lodash'
    },
    {
      title:
        'Understanding the Backbone Mindset: A review of Building  Backbone Plugins by Derick Bailey',
      date: '2014-07-09 11:38:40+00:00',
      path:
        '/2014/07/09/understanding-the-backbone-mindset-a-review-of-building-backbone-plugins-by-derick-bailey',
      description:
        'A book review of a great deep dive into Backbone best practices',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title: '2015 Roundup',
      date: '2015-12-31 05:56:04+00:00',
      path: '/2015/12/31/2015-roundup-2',
      description: 'A look back at benmccormick.org in 2015',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'Backbone and ES6 Classes Revisited',
      date: '2015-07-06 11:22:22+00:00',
      path: '/2015/07/06/backbone-and-es6-classes-revisited',
      description: 'A second look at using ES6 classes with Backbone',
      category: 'frameworks',
      dontfeature: null,
      key: 'bb-es6-2'
    },
    {
      title: 'Book Review: Talking with Tech Leads',
      date: '2015-06-15 11:30:44+00:00',
      path: '/2015/06/15/book-review-talking-with-tech-leads',
      description: 'A book review of Talking with Tech Leads',
      category: 'reviews',
      dontfeature: null,
      key: null
    },
    {
      title:
        "ES5, ES6, ES2016, ES.Next: What's going on with JavaScript versioning?",
      date: '2015-09-14 03:11:34+00:00',
      path:
        '/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning',
      description:
        'A summary of the naming conventions for the JavaScript language',
      category: 'javascript',
      dontfeature: null,
      key: 'ecma-explanation'
    },
    {
      title: "Why Backbone.js and ES6 Classes Don't Mix",
      date: '2015-04-07 03:19:44+00:00',
      path: '/2015/04/07/es6-classes-and-backbone-js',
      description:
        'A rundown of the challenges of using ES6 classes in Backbone',
      category: 'frameworks',
      dontfeature: null,
      key: 'bb-es6-1'
    },
    {
      title: 'ES6 Patterns: Clean Higher Order Functions',
      date: '2015-11-30 05:06:03+00:00',
      path: '/2015/11/30/es6-patterns-clean-higher-order-functions',
      description: 'A quick tip for clean functional syntax in ES6',
      category: 'javascript',
      dontfeature: null,
      key: 'clean-higher-order-functions'
    },
    {
      title: 'ES6 Patterns: Converting Callbacks to Promises',
      date: '2015-12-30 03:30:47+00:00',
      path: '/2015/12/30/es6-patterns-converting-callbacks-to-promises',
      description:
        'How to convert a callback driven API to a Promise-based one',
      category: 'javascript',
      dontfeature: null,
      key: 'callbacks-to-promises'
    },
    {
      title: 'How jQuery Works - An Introduction',
      date: '2015-06-08 11:51:25+00:00',
      path: '/2015/06/08/how-jquery-works-an-introduction',
      description: 'A dive into the structure of the jQuery library',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Is Bower Useful?',
      date: '2015-01-22 04:52:06+00:00',
      path: '/2015/01/22/is-bower-useful',
      description: 'A defense of Bower as a useful package manager',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Is Safari being left behind?',
      date: '2015-06-10 04:03:41+00:00',
      path: '/2015/06/10/is-safari-being-left-behind',
      description: 'Should we be concerned about Safari holding back the web?',
      category: 'platform',
      dontfeature: null,
      key: null
    },
    {
      title: 'marionette-service: Service Objects for Marionette',
      date: '2015-05-25 14:02:00+00:00',
      path: '/2015/05/25/marionette-service-service-objects-for-marionette',
      description:
        'Introducing marionette-service, a services library for Marionette apps',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'The Life of a Marionette View',
      date: '2015-01-05 04:01:45+00:00',
      path: '/2015/01/05/marionette-view-life-cycles',
      description: 'A breakdown of the lifecycle of Marionette Views',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Mozilla: The state of Web Components',
      date: '2015-06-14 21:35:58+00:00',
      path: '/2015/06/14/mozilla-the-state-of-web-components',
      description:
        "A look at Mozilla's writeup on the current status of the web components spec",
      category: 'platform',
      dontfeature: null,
      key: null
    },
    {
      title: 'Productive JavaScript Development',
      date: '2015-11-25 14:43:46+00:00',
      path: '/2015/11/25/productive-javascript-development',
      description:
        'An examination of what makes JavaScript development productive',
      category: 'software-productivity',
      dontfeature: null,
      key: 'productive-js-dev'
    },
    {
      title: 'Guillermo Rauch on ECMAScript 6',
      date: '2015-02-22 21:38:46+00:00',
      path: '/2015/02/22/rauchg-on-es6',
      description: "A link-log of Guillermo Rauch's look at ES6",
      category: 'javascript',
      dontfeature: null,
      key: 'rauchg-on-es6'
    },
    {
      title: 'Staying DRY with Marionette Behaviors',
      date: '2015-03-23 04:04:17+00:00',
      path: '/2015/03/23/staying-dry-with-marionette-behaviors',
      description:
        'How to keep your Views DRY using Behaviors in your Marionette app',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Moving Past RequireJS',
      date: '2015-05-28 14:10:00+00:00',
      path: '/2015/05/28/moving-past-requirejs',
      description:
        'A look at the problems with using requireJS in todays JavaScript world',
      category: 'frameworks',
      dontfeature: 'true',
      key: null
    },
    {
      title: 'Lessons Backbone Developers Can Learn From React',
      date: '2015-09-09 11:19:43+00:00',
      path: '/2015/09/09/what-can-backbone-developers-learn-from-react',
      description:
        'A look at the lessons that Backbone developers can learn from React',
      category: 'frameworks',
      dontfeature: null,
      key: 'backbone-devs-react'
    },
    {
      title: '2016 Roundup',
      date: '2016-12-30 02:15:00+00:00',
      path: '/2016/12/31/2016-roundup',
      description: 'A look back at benmccormick.org in 2016',
      category: 'meta',
      dontfeature: null,
      key: null
    },
    {
      title: 'Ack Tips',
      date: '2016-04-30 15:48:25+00:00',
      path: '/2016/04/30/ack-tips',
      description: 'A set of tips for using Ack, a command line search tool',
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Digging Into React: Choosing Component Styles',
      date: '2016-05-02 02:32:36+00:00',
      path: '/2016/05/02/digging-into-react-choosing-component-styles',
      description:
        'An examination of the various styles for defining React components',
      category: 'frameworks',
      dontfeature: null,
      key: 'react-component-styles'
    },
    {
      title: 'A whole new site',
      date: '2016-12-02 16:00:00+00:00',
      path: '/2016/12/02/whole-new-site/',
      description: 'Introducing a new look for benmccormick.org',
      category: 'meta',
      dontfeature: null,
      key: 'new-look-2016'
    },
    {
      title: 'Quick Tip: Take advantage of lodash collections',
      date: '2016-06-26 21:27:55+00:00',
      path: '/2016/06/26/quick-tip-take-advantage-of-lodash-collections-2',
      description:
        'A quick look at the benefits of using lodash collection methods',
      category: 'frameworks',
      dontfeature: null,
      key: null
    },
    {
      title: 'Readable code: Know your audience ',
      date: '2016-12-12 04:00:00+00:00',
      path: '/2016/12/11/readable-code-audience',
      description:
        'A quick observation about what it means to write readable code',
      category: 'software-productivity',
      dontfeature: null,
      key: 'readable-code'
    },
    {
      title: 'Stability vs Decline',
      date: '2016-03-09 06:04:39+00:00',
      path: '/2016/03/09/stability-vs-decline',
      description:
        'What is the difference between stable and declining software?',
      category: 'software-productivity',
      dontfeature: null,
      key: 'stability-decline'
    },
    {
      title: 'Reusable Code Patterns',
      date: '2016-01-08 05:22:29+00:00',
      path: '/2016/01/08/reusable-code-patterns',
      description: 'Practical tips on reusing existing code',
      category: 'software-productivity',
      dontfeature: null,
      key: null
    },
    {
      title: 'Staying Productive',
      date: '2016-01-25 04:41:46+00:00',
      path: '/2016/01/25/staying-productive',
      description:
        'Thinking through the environmental factors that lead to productivity',
      category: 'software-productivity',
      dontfeature: null,
      key: 'staying-productive'
    },
    {
      title: 'What are Higher Order Components?',
      date: '2016-12-14 14:30:00+00:00',
      path: '/2016/12/14/what-are-higher-order-components',
      description: "An explanation of React's higher order components",
      category: 'frameworks',
      dontfeature: null,
      key: 'what-are-hocs'
    },
    {
      title: 'Testing with Jest Snapshots: First Impressions',
      date: '2016-09-19 12:41:00+00:00',
      path: '/2016/09/19/testing-with-jest-snapshots-first-impressions/',
      description:
        'First impression of testing UI components using Jest snapshots',
      category: 'tools',
      dontfeature: null,
      key: 'jest-first'
    },
    {
      title: 'What are mutable and immutable data structures?',
      date: '2016-06-04 21:52:52+00:00',
      path: '/2016/06/04/what-are-mutable-and-immutable-data-structures-2',
      description:
        'A quick look at the difference between mutable and immutable data',
      category: 'software-productivity',
      dontfeature: null,
      key: null
    },
    {
      title: 'My Favorite Interview Question',
      date: '2017-07-24 11:45:00+00:00',
      path: '/2017/07/24/my-favorite-interview-question/',
      description: 'How does the Internet work anyway?',
      category: 'software-productivity',
      dontfeature: null,
      key: 'favorite-interview'
    },
    {
      title: 'How to follow the JavaScript roadmap',
      date: '2017-07-10 12:00:00+00:00',
      path: '/2017/07/10/how-to-follow-the-javascript-roadmap/',
      description: "Keeping up with the language's progress",
      category: 'javascript',
      dontfeature: null,
      key: 'following-js-roadmap'
    },
    {
      title: 'Adding RSS, Atom, and JSON Feed to Gatsby',
      date: '2017-06-04 01:55:00+00:00',
      path: '/2017/06/03/rss-atom-json-gatsby/',
      description: 'How to support subscription feeds with Gastby',
      category: 'meta',
      dontfeature: null,
      key: 'rss-atom-json-feeds'
    },
    {
      title: 'Giving Context To Best Practices',
      date: '2017-02-18 23:30:00+00:00',
      path: '/2017/02/18/context-to-best-practices/',
      description: 'What we talk about when we talk about best practices',
      category: 'software-productivity',
      dontfeature: null,
      key: 'll-context'
    },
    {
      title: 'MobX: First Impressions',
      date: '2017-01-09 13:30:00+00:00',
      path: '/2017/01/09/mobx-first-impressions/',
      description: 'First impression of managing data with MobX',
      category: 'frameworks',
      dontfeature: null,
      key: 'mobx-first'
    },
    {
      title: 'Orthogonality and CSS in JS',
      date: '2017-01-03 00:00:00+00:00',
      path: '/2017/01/03/orthogonality-and-css-in-js/',
      description:
        'Separation of concerns in the context of CSS and JavaScript',
      category: 'software-productivity',
      dontfeature: null,
      key: 'orthogonality-css-js'
    },
    {
      title: 'A look at Ack',
      date: '2013-11-25 23:50:00+00:00',
      path: '/2013/11/25/a-look-at-ack',
      description: 'An introduction to using Ack for file searching',
      category: 'tools',
      dontfeature: null,
      key: 'look-at-ack'
    },
    {
      title: 'Ten Things A Serious JavaScript Developer Should Learn',
      date: '2017-07-19 04:00:00+00:00',
      path: '/2017/07/19/ten-things-javascript/',
      description: 'Some of the important things to pick up in the JS world',
      category: 'javascript',
      dontfeature: null,
      key: 'ten-things-js'
    },
    {
      title: 'Vim Workflows: File Switching',
      date: '2014-11-10 04:06:52+00:00',
      path: '/2014/11/10/vim-workflows-file-switching-strategies',
      description:
        'A look at the different approaches you can take to managing files in Vim',
      category: 'tools',
      dontfeature: null,
      key: 'vim-files'
    },
    {
      title: "The Most Interesting Atom Packages I've found (so far)",
      date: '2016-01-11 02:25:49+00:00',
      path: '/2016/01/11/the-most-interesting-atom-packages-ive-found-so-far',
      description: "A rundown of the coolest Atom packages I've seen",
      category: 'tools',
      dontfeature: null,
      key: 'interesting-atom'
    },
    {
      title: 'The Sad State of the Backbone Ecosystem',
      date: '2016-03-07 05:06:40+00:00',
      path: '/2016/03/07/the-sad-state-of-the-backbone-ecosystem',
      description: 'A look at the current state of Backbone libraries',
      category: 'frameworks',
      dontfeature: 'true',
      key: 'backbone-eco'
    },
    {
      title: 'Building Modular Web Apps With Backbone.Radio',
      date: '2015-01-26 12:00:00+00:00',
      path: '/2015/01/26/backbone-radio',
      description: 'An overview of using Backbone.Radio in Marionette apps',
      category: 'frameworks',
      dontfeature: null,
      key: 'bb-radio'
    },
    {
      title: 'Saving Time With Jest: Meetup Summary',
      date: '2016-12-10 05:15:00+00:00',
      path: '/2016/12/10/saving-time-with-jest',
      description: 'A summary of my meetup talk on saving time with Jest',
      category: 'tools',
      dontfeature: null,
      key: 'saving-time-jest'
    },
    {
      title: 'The Mystery Of Docker And The Disk-Eating Cow',
      date: '2017-03-28 14:40:00+00:00',
      path: '/2017/03/28/the-mystery-of-docker-and-the-disk-eating-cow/',
      description: 'Tracking down how Docker ate half my hard drive',
      category: 'tools',
      dontfeature: null,
      key: 'docker-cow'
    },
    {
      title: 'Atom Productivity Tips',
      date: '2017-05-30 03:20:00+00:00',
      path: '/2017/05/29/atom-tips/',
      description: 'Getting the most out of Atom',
      category: 'tools',
      dontfeature: null,
      key: 'atom-tips'
    },
    {
      title: 'Running Jest Tests Before Each Git Commit',
      date: '2017-02-26 23:00:00+00:00',
      path: '/2017/02/26/running-jest-tests-before-each-git-commit/',
      description: 'A simple setup to run your Jest tests before every commit',
      category: 'tools',
      dontfeature: null,
      key: 'jest-git'
    },
    {
      title: 'Mariana Syntax Theme For Atom',
      date: '2017-05-28 04:05:00+00:00',
      path: '/2017/05/28/mariana-syntax-atom/',
      description: 'Announcing a port of the Mariana color scheme to Atom',
      category: 'tools',
      dontfeature: null,
      key: 'mariana'
    },
    {
      title: 'Evaluating Web Apps With Lighthouse',
      date: '2017-02-14 03:30:00+00:00',
      path: '/2017/02/13/improving-site-performance-with-lighthouse',
      description:
        "Profiling and improving my site with Google's Lighthouse tool",
      category: 'tools',
      dontfeature: null,
      key: null
    },
    {
      title: 'Building Normal Distribution Charts Using Highcharts',
      date: '2017-05-12 02:30:00+00:00',
      path: '/2017/05/11/building-normal-curves-highcharts/',
      description: 'Creating a statistical visualization in JavaScript',
      category: 'frameworks',
      dontfeature: null,
      key: 'highcharts-normal'
    },
    {
      title: 'Grading Applications On Config Portability',
      date: '2017-04-14 21:30:00+00:00',
      path: '/2017/04/14/grading-applications-on-config-portability/',
      description: 'Which applications allow syncing settings cross-device?',
      category: 'tools',
      dontfeature: null,
      key: 'config-portability'
    }
  ]
};

storiesOf('Recommended Posts', module).add('with some posts', () =>
  <Router>
    <RecommendedPosts {...recProps} />
  </Router>
);
