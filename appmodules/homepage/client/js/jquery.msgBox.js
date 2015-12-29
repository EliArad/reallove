



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jQuery.msgBox/jquery.msgBox.js at master · dotCtor/jQuery.msgBox</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="dotCtor/jQuery.msgBox" name="twitter:title" /><meta content="jQuery.msgBox - A smart message window plugin for jQuery." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/2265840?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/2265840?v=3&amp;s=400" property="og:image" /><meta content="dotCtor/jQuery.msgBox" property="og:title" /><meta content="https://github.com/dotCtor/jQuery.msgBox" property="og:url" /><meta content="jQuery.msgBox - A smart message window plugin for jQuery." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTAxMjg1MTY6MjhkNzMzNDVhNDQ1MjU0OTE5YmE4MDk1NWU5MDk1MzI6ZTFlNDE3MDg4NDZlYjk3MDMyNTIxYzRiZDY0MTdjMWJhNjNiM2UwZDdjZTM1NzcwNjg2MTM5Yzk2Y2UwYjliZQ==--2547bbaa6388224a5d412404563bb5931f3f199a">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="52A6925A:2F41:20383B61:5681B8FA" name="octolytics-dimension-request_id" /><meta content="10128516" name="octolytics-actor-id" /><meta content="EliArad" name="octolytics-actor-login" /><meta content="b7b880ad9159b135d9902ac6eb9f815a1ec1caac4e23f26109d33ab58ba11f63" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="EliArad">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-16bf5399d85a6f926eb6af8f983ed5cf907e97b4da4a650dc11920d425826218.css" integrity="sha256-Fr9Tmdhab5Jutq+PmD7Vz5B+l7TaSmUNwRkg1CWCYhg=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-451ab63ad67fa9af580e5d9a3b2b7de911ce2e4b2437638f26fe8cb3879e67d8.css" integrity="sha256-RRq2OtZ/qa9YDl2aOyt96RHOLkskN2OPJv6Ms4eeZ9g=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="be269b1951a3572820c1f935e13a2f75">

      
  <meta name="description" content="jQuery.msgBox - A smart message window plugin for jQuery.">
  <meta name="go-import" content="github.com/dotCtor/jQuery.msgBox git https://github.com/dotCtor/jQuery.msgBox.git">

  <meta content="2265840" name="octolytics-dimension-user_id" /><meta content="dotCtor" name="octolytics-dimension-user_login" /><meta content="5650115" name="octolytics-dimension-repository_id" /><meta content="dotCtor/jQuery.msgBox" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5650115" name="octolytics-dimension-repository_network_root_id" /><meta content="dotCtor/jQuery.msgBox" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/dotCtor/jQuery.msgBox/commits/master.atom" rel="alternate" title="Recent Commits to jQuery.msgBox:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github "></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dotCtor/jQuery.msgBox/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/dotCtor/jQuery.msgBox/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:EliArad"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell "></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="dotCtor/jQuery.msgBox">This repository</span>
  </div>
    <a class="dropdown-item" href="/dotCtor/jQuery.msgBox/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/EliArad"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@EliArad" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/10128516?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">EliArad</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/EliArad" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HLJC/ZOW0us53h03lwnpyMRbn0MVnheMyl/fgQukYvPFLDwig9AQSTW12x9T7PTK2Jpf+ZbA4SUeXPk77ereKg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FPfYmHhtQYPRvNzN9R2OPpIVsLVjfA24Q9IUYq8DXZwcHKu5BoGKca1YURQRnaO01eIsB3axPz4Ny6T1Jl6pUA==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="5650115" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/dotCtor/jQuery.msgBox/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span class="octicon octicon-eye "></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/dotCtor/jQuery.msgBox/watchers">
            5
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dotCtor/jQuery.msgBox/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="i54z8pVA5egVmgTfbMVDfWVX3YrhBWHji9ZcJnqAHNsjs/3uc4fCQEGalXgIAbIsBBIlD3Yi7KVDvh9t/7Joew==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar dotCtor/jQuery.msgBox"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star "></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/dotCtor/jQuery.msgBox/stargazers">
          18
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dotCtor/jQuery.msgBox/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bWf9277A71sGp3oR7a45d1Ec6OvOD5jjOVGq750xZDEZGSZ/tlyGcknY+/MEohvST+nqhGAvHCe6HnFrBxbudg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star dotCtor/jQuery.msgBox"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star "></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/dotCtor/jQuery.msgBox/stargazers">
          18
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dotCtor/jQuery.msgBox/fork" class="btn-with-count" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FguNFf5IgSQA2Vr9D++vZiVznAEByIJJpbk9ug4xucj3eRYsY56AVoZnIPUfzbC7xaLJ54/+cAFv5RpgwcCs1Q==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of dotCtor/jQuery.msgBox to your account"
                aria-label="Fork your own copy of dotCtor/jQuery.msgBox to your account">
              <span class="octicon octicon-repo-forked "></span>
              Fork
            </button>
</form>
    <a href="/dotCtor/jQuery.msgBox/network" class="social-count">
      27
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo "></span>
  <span class="author"><a href="/dotCtor" class="url fn" itemprop="url" rel="author"><span itemprop="title">dotCtor</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/dotCtor/jQuery.msgBox" data-pjax="#js-repo-pjax-container">jQuery.msgBox</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/dotCtor/jQuery.msgBox" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /dotCtor/jQuery.msgBox">
    <span class="octicon octicon-code "></span>
    Code
</a>
    <a href="/dotCtor/jQuery.msgBox/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /dotCtor/jQuery.msgBox/issues">
      <span class="octicon octicon-issue-opened "></span>
      Issues
      <span class="counter">4</span>
</a>
  <a href="/dotCtor/jQuery.msgBox/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /dotCtor/jQuery.msgBox/pulls">
    <span class="octicon octicon-git-pull-request "></span>
    Pull requests
    <span class="counter">1</span>
</a>
    <a href="/dotCtor/jQuery.msgBox/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /dotCtor/jQuery.msgBox/wiki">
      <span class="octicon octicon-book "></span>
      Wiki
</a>
  <a href="/dotCtor/jQuery.msgBox/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /dotCtor/jQuery.msgBox/pulse">
    <span class="octicon octicon-pulse "></span>
    Pulse
</a>
  <a href="/dotCtor/jQuery.msgBox/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /dotCtor/jQuery.msgBox/graphs">
    <span class="octicon octicon-graph "></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/dotCtor/jQuery.msgBox/blob/8b435ae6f1f0aa4c53dbded1adae0bdbaac8994f/scripts/jquery.msgBox.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:be7415a4d1fcd1cea993f7f8704cb3ff -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/dotCtor/jQuery.msgBox/blob/gh-pages/scripts/jquery.msgBox.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/dotCtor/jQuery.msgBox/blob/master/scripts/jquery.msgBox.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/dotCtor/jQuery.msgBox/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dotCtor/jQuery.msgBox" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jQuery.msgBox</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dotCtor/jQuery.msgBox/tree/master/scripts" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator">/</span><strong class="final-path">jquery.msgBox.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/dotCtor/jQuery.msgBox/commit/b006a4360f9a80f38ef2a11b7f62593e099faa6d" data-pjax>
          b006a43
        </a>
        <time datetime="2014-06-13T09:49:11Z" is="relative-time">Jun 13, 2014</time>
      </span>
      <div>
        <img alt="@rickyhuang" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/7879147?v=3&amp;s=40" width="20" />
        <a href="/rickyhuang" class="user-mention" rel="contributor">rickyhuang</a>
          <a href="/dotCtor/jQuery.msgBox/commit/b006a4360f9a80f38ef2a11b7f62593e099faa6d" class="message" data-pjax="true" title="Update jquery.msgBox.js

In the functin show() there is a statement $(window).bind(&quot;resize&quot;, function (e) { ... }) to register a resize event handler to the window but no corresponding statement $(window).unbind(&quot;resize&quot;)  in the function hide(). If we create new msgBox and close it and then repeat this operation for several times the DOM count will increase gradually.">Update jquery.msgBox.js</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>4</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="steunix" href="/dotCtor/jQuery.msgBox/commits/master/scripts/jquery.msgBox.js?author=steunix"><img alt="@steunix" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/3736185?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="koppor" href="/dotCtor/jQuery.msgBox/commits/master/scripts/jquery.msgBox.js?author=koppor"><img alt="@koppor" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1366654?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rickyhuang" href="/dotCtor/jQuery.msgBox/commits/master/scripts/jquery.msgBox.js?author=rickyhuang"><img alt="@rickyhuang" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/7879147?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="timur87" href="/dotCtor/jQuery.msgBox/commits/master/scripts/jquery.msgBox.js?author=timur87"><img alt="@timur87" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/4758965?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@steunix" height="24" src="https://avatars1.githubusercontent.com/u/3736185?v=3&amp;s=48" width="24" />
            <a href="/steunix">steunix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@koppor" height="24" src="https://avatars2.githubusercontent.com/u/1366654?v=3&amp;s=48" width="24" />
            <a href="/koppor">koppor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rickyhuang" height="24" src="https://avatars3.githubusercontent.com/u/7879147?v=3&amp;s=48" width="24" />
            <a href="/rickyhuang">rickyhuang</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timur87" height="24" src="https://avatars2.githubusercontent.com/u/4758965?v=3&amp;s=48" width="24" />
            <a href="/timur87">timur87</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/dotCtor/jQuery.msgBox/raw/master/scripts/jquery.msgBox.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/dotCtor/jQuery.msgBox/blame/master/scripts/jquery.msgBox.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/dotCtor/jQuery.msgBox/commits/master/scripts/jquery.msgBox.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/dotCtor/jQuery.msgBox?branch=master&amp;filepath=scripts%2Fjquery.msgBox.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop "></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dotCtor/jQuery.msgBox/edit/master/scripts/jquery.msgBox.js" class="inline-form js-update-url-with-hash" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="y9Mttatzc2LueDXDdoOZsuWyKMJBu0nOaWSZcik513uLrKoVy7ZU+naPZ7tAe6BvoGOypqaK9DN2hSw9G/jg6Q==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil "></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/dotCtor/jQuery.msgBox/delete/master/scripts/jquery.msgBox.js" class="inline-form" data-form-nonce="6f6dced86fe084eacf7f38e940bb7edbc74a62f7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tZjq15j0ICSdRg1z7/rrNwirEdRiyUxad4iDIkcHuU5H09duYMHk1NuWw+uodhIQ4S1Tuc7zO/JyTH8LPJxT8A==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan "></span>
          </button>
</form>  </div>

  <div class="file-info">
      278 lines (250 sloc)
      <span class="file-info-divider"></span>
    11.3 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">jQuery.msgBox plugin</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">Version: 0.1.1 (trying to follow http://semver.org/)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">Code repository: https://github.com/dotCtor/jQuery.msgBox</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">Copyright (c) 2011-2013 Halil İbrahim Kalyoncu and Oliver Kopp</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">Redistribution and use in source and binary forms, with or without</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">modification, are permitted provided that the following conditions are met:</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">1. Redistributions of source code must retain the above copyright notice, this</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   list of conditions and the following disclaimer.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">2. Redistributions in binary form must reproduce the above copyright notice,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   this list of conditions and the following disclaimer in the documentation</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   and/or other materials provided with the distribution.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c">DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c">ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c">LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c">ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c">(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c">SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// users may change this variable to fit their needs</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> msgBoxImagePath <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>images/<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">jQuery</span>.<span class="pl-smi">msgBox</span> <span class="pl-k">=</span> msg;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">msg</span> (<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> isShown <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> typeOfValue <span class="pl-k">=</span> <span class="pl-k">typeof</span> options;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        content<span class="pl-k">:</span> (typeOfValue <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> options <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Message<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Warning<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">        type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>alert<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        autoClose<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        timeOut<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        modal<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        showButtons<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        buttons<span class="pl-k">:</span> [{ value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Ok<span class="pl-pds">&quot;</span></span>}],</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        inputs<span class="pl-k">:</span> [{ type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>, name<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>userName<span class="pl-pds">&quot;</span></span>, header<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>User Name<span class="pl-pds">&quot;</span></span> }, { type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>password<span class="pl-pds">&quot;</span></span>,name<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>password<span class="pl-pds">&quot;</span></span>, header<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Password<span class="pl-pds">&quot;</span></span>}],</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">result</span>) { },</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">beforeShow</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { },</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">afterShow</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { },</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">beforeClose</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { },</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">afterClose</span><span class="pl-k">:</span> <span class="pl-k">function</span> () { },</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">        opacity<span class="pl-k">:</span> <span class="pl-c1">0.1</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    options <span class="pl-k">=</span> typeOfValue <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> defaults <span class="pl-k">:</span> options;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-c1">type</span> <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">switch</span> (<span class="pl-smi">options</span>.<span class="pl-c1">type</span>) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>alert<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Warning<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>info<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Information<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Error<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>confirm<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Confirmation<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> [{ value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Yes<span class="pl-pds">&quot;</span></span> }, { value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>No<span class="pl-pds">&quot;</span></span> }, { value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Cancel<span class="pl-pds">&quot;</span></span>}] <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>prompt<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Log In<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> [{ value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Login<span class="pl-pds">&quot;</span></span> }, { value<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Cancel<span class="pl-pds">&quot;</span></span>}] <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">                image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>alert.png<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">options</span>.<span class="pl-smi">timeOut</span> <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">timeOut</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> (<span class="pl-smi">options</span>.<span class="pl-c1">content</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-c1">500</span> <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-c1">content</span>.<span class="pl-c1">length</span> <span class="pl-k">*</span> <span class="pl-c1">70</span>) <span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">timeOut</span>;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    options <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, defaults, options);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-smi">autoClose</span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">setTimeout</span>(hide, <span class="pl-smi">options</span>.<span class="pl-smi">timeOut</span>);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">switch</span> (<span class="pl-smi">options</span>.<span class="pl-c1">type</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>alert<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">            image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>alert.png<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>info<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">            image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>info.png<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">            image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>error.png<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>confirm<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">            image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>confirm.png<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">            image <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>alert.png<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divId <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>msgBox<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* i was testing with ($.browser.msie  &amp;&amp; parseInt($.browser.version, 10) === 7) but $.browser.msie is not working with jQuery 1.9.0 :S. Alternative method: */</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> ( <span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>msie 7<span class="pl-pds">/</span>i</span>) <span class="pl-k">!==</span> <span class="pl-c1">null</span>) { <span class="pl-k">var</span> divMsgBoxContentClass <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>msgBoxContentIEOld<span class="pl-pds">&quot;</span></span>; } <span class="pl-k">else</span> { <span class="pl-k">var</span> divMsgBoxContentClass <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>msgBoxContent<span class="pl-pds">&quot;</span></span>;}</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxId <span class="pl-k">=</span> divId; </td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxContentId <span class="pl-k">=</span> divId<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>Content<span class="pl-pds">&quot;</span></span>; </td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxImageId <span class="pl-k">=</span> divId<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>Image<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxButtonsId <span class="pl-k">=</span> divId<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>Buttons<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxBackGroundId <span class="pl-k">=</span> divId<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>BackGround<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> firstButtonId <span class="pl-k">=</span> divId<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>FirstButton<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> buttons <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> isFirstButton <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-smi">options</span>.<span class="pl-smi">buttons</span>).<span class="pl-en">each</span>(<span class="pl-k">function</span> (<span class="pl-smi">index</span>, <span class="pl-smi">button</span>) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> add <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (isFirstButton) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">            add <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> id=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> firstButtonId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">            isFirstButton <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        buttons <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;input class=<span class="pl-cce">\&quot;</span>msgButton<span class="pl-cce">\&quot;</span> type=<span class="pl-cce">\&quot;</span>button<span class="pl-cce">\&quot;</span> name=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">button</span>.<span class="pl-c1">value</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> value=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">button</span>.<span class="pl-c1">value</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> add <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> inputs <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-smi">options</span>.<span class="pl-smi">inputs</span>).<span class="pl-en">each</span>(<span class="pl-k">function</span> (<span class="pl-smi">index</span>, <span class="pl-smi">input</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-c1">type</span>;</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (type<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>checkbox<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> type <span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>radiobutton<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">            inputs <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>msgInput<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;input type=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">input</span>.<span class="pl-c1">type</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> name=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">input</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-smi">input</span>.<span class="pl-c1">checked</span> <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>checked =&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">input</span>.<span class="pl-c1">checked</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> value=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-k">typeof</span> <span class="pl-smi">input</span>.<span class="pl-c1">value</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">input</span>.<span class="pl-c1">value</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> /&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;text&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">input</span>.<span class="pl-smi">header</span> <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/text&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">            inputs <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>msgInput<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;span class=<span class="pl-cce">\&quot;</span>msgInputHeader<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">input</span>.<span class="pl-smi">header</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;input type=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">input</span>.<span class="pl-c1">type</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> name=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">input</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> value=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-k">typeof</span> <span class="pl-smi">input</span>.<span class="pl-c1">value</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-smi">input</span>.<span class="pl-c1">value</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">            (<span class="pl-k">typeof</span> <span class="pl-smi">input</span>.<span class="pl-c1">size</span><span class="pl-k">!==</span><span class="pl-c1">undefined</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span> size=&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">input</span>.<span class="pl-c1">size</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; <span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">            (<span class="pl-k">typeof</span> <span class="pl-smi">input</span>.<span class="pl-smi">maxlength</span><span class="pl-k">!==</span><span class="pl-c1">undefined</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span> maxlength=&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">input</span>.<span class="pl-smi">maxlength</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; <span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span> /&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divBackGround <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxBackGroundId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> class=<span class="pl-cce">\&quot;</span>msgBoxBackGround<span class="pl-cce">\&quot;</span>&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divTitle <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>msgBoxTitle<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-c1">title</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divContainer <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>msgBoxContainer<span class="pl-cce">\&quot;</span>&gt;&lt;div id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxImageId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> class=<span class="pl-cce">\&quot;</span>msgBoxImage<span class="pl-cce">\&quot;</span>&gt;&lt;img src=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> msgBoxImagePath <span class="pl-k">+</span> image <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>/&gt;&lt;/div&gt;&lt;div id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxContentId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> class=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxContentClass <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&gt;&lt;p&gt;&lt;span&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">options</span>.<span class="pl-c1">content</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divButtons <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxButtonsId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> class=<span class="pl-cce">\&quot;</span>msgBoxButtons<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> buttons <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divInputs <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>msgBoxInputs<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> inputs <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBox; </td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxContent; </td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxImage;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxButtons;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> divMsgBoxBackGround;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>prompt<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(divBackGround <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> class=<span class="pl-cce">\&quot;</span>msgBox<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divTitle <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divContainer <span class="pl-k">+</span> (<span class="pl-smi">options</span>.<span class="pl-smi">showButtons</span> <span class="pl-k">?</span> divButtons <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        divMsgBox <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxId); </td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        divMsgBoxContent <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxContentId); </td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        divMsgBoxImage <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxImageId);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        divMsgBoxButtons <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxButtonsId);</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        divMsgBoxBackGround <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxBackGroundId);</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxImage</span>.<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxButtons</span>.<span class="pl-en">css</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>text-align<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>center<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>margin-top<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>5px<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxContent</span>.<span class="pl-en">css</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxContent</span>.<span class="pl-en">html</span>(divInputs);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).<span class="pl-en">append</span>(divBackGround <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divMsgBoxId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> class=<span class="pl-cce">\&quot;</span>msgBox<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divTitle <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> divContainer <span class="pl-k">+</span> (<span class="pl-smi">options</span>.<span class="pl-smi">showButtons</span> <span class="pl-k">?</span> divButtons <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/div&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        divMsgBox<span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxId); </td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        divMsgBoxContent <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxContentId); </td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        divMsgBoxImage <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxImageId);</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        divMsgBoxButtons <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxButtonsId);</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        divMsgBoxBackGround <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxBackGroundId);</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">divMsgBoxContent</span>.<span class="pl-c1">height</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>auto<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-smi">divMsgBox</span>.<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> height <span class="pl-k">=</span> <span class="pl-smi">divMsgBox</span>.<span class="pl-c1">height</span>();</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> windowHeight <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-c1">height</span>();</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> windowWidth <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> top <span class="pl-k">=</span> windowHeight <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> height <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> left <span class="pl-k">=</span> windowWidth <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> width <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">show</span>() {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (isShown) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBox</span>.<span class="pl-en">css</span>({ opacity<span class="pl-k">:</span> <span class="pl-c1">0</span>, top<span class="pl-k">:</span> top <span class="pl-k">-</span> <span class="pl-c1">50</span>, left<span class="pl-k">:</span> left });</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBox</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>background-image<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>url(&#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>msgBoxImagePath<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>msgBoxBackGround.png&#39;)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxBackGround</span>.<span class="pl-en">css</span>({ opacity<span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">opacity</span> });</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">options</span>.<span class="pl-en">beforeShow</span>();</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxBackGround</span>.<span class="pl-en">css</span>({ <span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-c1">width</span>(), <span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-en">getDocHeight</span>() });</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(divMsgBoxId<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>divMsgBoxBackGroundId).<span class="pl-en">fadeIn</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBox</span>.<span class="pl-en">animate</span>({ opacity<span class="pl-k">:</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> top, <span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> left }, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">setTimeout</span>(<span class="pl-smi">options</span>.<span class="pl-smi">afterShow</span>, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> firstButtonId).<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        isShown <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-smi">divMsgBox</span>.<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> height <span class="pl-k">=</span> <span class="pl-smi">divMsgBox</span>.<span class="pl-c1">height</span>();</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> windowHeight <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-c1">height</span>();</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> windowWidth <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> top <span class="pl-k">=</span> windowHeight <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> height <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> left <span class="pl-k">=</span> windowWidth <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">-</span> width <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">divMsgBox</span>.<span class="pl-en">css</span>({ <span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> top, <span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> left });</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">divMsgBoxBackGround</span>.<span class="pl-en">css</span>({<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>});</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">hide</span>() {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>isShown) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">options</span>.<span class="pl-en">beforeClose</span>();</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBox</span>.<span class="pl-en">animate</span>({ opacity<span class="pl-k">:</span> <span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> top <span class="pl-k">-</span> <span class="pl-c1">50</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> left }, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">divMsgBoxBackGround</span>.<span class="pl-en">fadeOut</span>(<span class="pl-c1">300</span>);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () { <span class="pl-smi">divMsgBox</span>.<span class="pl-en">remove</span>(); <span class="pl-smi">divMsgBoxBackGround</span>.<span class="pl-en">remove</span>(); }, <span class="pl-c1">300</span>);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">setTimeout</span>(<span class="pl-smi">options</span>.<span class="pl-smi">afterClose</span>, <span class="pl-c1">300</span>);</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">unbind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">        isShown <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">getDocHeight</span>() {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> D <span class="pl-k">=</span> <span class="pl-c1">document</span>;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">D</span>.<span class="pl-c1">body</span>.<span class="pl-smi">scrollHeight</span>, <span class="pl-smi">D</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">scrollHeight</span>),</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">D</span>.<span class="pl-c1">body</span>.<span class="pl-smi">offsetHeight</span>, <span class="pl-smi">D</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">offsetHeight</span>),</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">D</span>.<span class="pl-c1">body</span>.<span class="pl-smi">clientHeight</span>, <span class="pl-smi">D</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">clientHeight</span>));</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">getFocus</span>() {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    	<span class="pl-smi">divMsgBox</span>.<span class="pl-en">fadeOut</span>(<span class="pl-c1">200</span>).<span class="pl-en">fadeIn</span>(<span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.msgButton<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">options</span>.<span class="pl-c1">type</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>prompt<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">options</span>.<span class="pl-en">success</span>(value);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> inputValues <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div.msgInput input<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span> (<span class="pl-smi">index</span>, <span class="pl-smi">domEle</span>) {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>name<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>checkbox<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> type <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>radiobutton<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">inputValues</span>.<span class="pl-c1">push</span>({ name<span class="pl-k">:</span> name, value<span class="pl-k">:</span> value,checked<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checked<span class="pl-pds">&quot;</span></span>)});</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">inputValues</span>.<span class="pl-c1">push</span>({ name<span class="pl-k">:</span> name, value<span class="pl-k">:</span> value });</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">options</span>.<span class="pl-en">success</span>(value,inputValues);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">divMsgBoxBackGround</span>.<span class="pl-c1">click</span>(<span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ( <span class="pl-smi">options</span>.<span class="pl-smi">modal</span> )</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">options</span>.<span class="pl-smi">showButtons</span> <span class="pl-k">||</span> (<span class="pl-smi">options</span>.<span class="pl-smi">showButtons</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">options</span>.<span class="pl-smi">buttons</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;</span><span class="pl-c1">2</span>) <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-smi">autoClose</span>) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">getFocus</span>();</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github " title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08276s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-S2uOfRHrt7zoUSbTtBMMgAQfKubV1u+JAajAw/fLgNI=" src="https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

