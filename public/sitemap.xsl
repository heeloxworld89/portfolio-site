<?xml version="1.0" encoding="UTF-8"?>
<!-- Renders /sitemap.xml as a readable page in browsers. Crawlers read the XML
     and ignore this file. Page names are mapped from paths below; a new page
     without a mapping falls back to its path. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="s image">

  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:variable name="site" select="'https://www.raadh.me'"/>

  <!-- Friendly name for a URL -->
  <xsl:template name="name">
    <xsl:param name="u"/>
    <xsl:variable name="p" select="substring-after($u, $site)"/>
    <xsl:choose>
      <xsl:when test="$p = '/'">Home</xsl:when>
      <xsl:when test="$p = '/research'">Research: ORMAS</xsl:when>
      <xsl:when test="$p = '/deepmath'">DeepMath 2026 paper and poster</xsl:when>
      <xsl:when test="$p = '/lunar-fire-safety'">Lunar fire safety</xsl:when>
      <xsl:when test="$p = '/work'">Work: OXIEDO, OXIMO, Black Bloxie</xsl:when>
      <xsl:when test="$p = '/about'">About</xsl:when>
      <xsl:when test="$p = '/evidence'">Evidence</xsl:when>
      <xsl:when test="$p = '/articles'">Articles</xsl:when>
      <xsl:when test="$p = '/dead-channels'">VGG-19-BN spends 18.6% of its compute on dead channels</xsl:when>
      <xsl:when test="contains($p, 'Rokib_Al_Dhin_Raadh_CV')">Curriculum vitae</xsl:when>
      <xsl:when test="contains($p, 'academic_research_paper')">OXIMO technical report</xsl:when>
      <xsl:when test="contains($p, 'investor_whitepaper')">OXIEDO whitepaper</xsl:when>
      <xsl:when test="contains($p, 'pitch_deck')">OXIEDO pitch deck</xsl:when>
      <xsl:when test="$p = '/llms.txt'">llms.txt: profile for AI assistants</xsl:when>
      <xsl:when test="$p = '/llms-full.txt'">llms-full.txt: full site text</xsl:when>
      <xsl:otherwise><xsl:value-of select="$p"/></xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <!-- One-line description for a URL -->
  <xsl:template name="note">
    <xsl:param name="u"/>
    <xsl:variable name="p" select="substring-after($u, $site)"/>
    <xsl:choose>
      <xsl:when test="$p = '/'">Profile, publications, news and talks</xsl:when>
      <xsl:when test="$p = '/research'">The self-repairing neural network: method, 383 experiments, stability analysis</xsl:when>
      <xsl:when test="$p = '/deepmath'">Peer-reviewed stability paper, poster, figures and questions</xsl:when>
      <xsl:when test="$p = '/lunar-fire-safety'">A fire-safety problem in NASA's plans for the Moon, with registered predictions</xsl:when>
      <xsl:when test="$p = '/work'">The company, the multi-agent system and the twelve-month live study</xsl:when>
      <xsl:when test="$p = '/about'">Recognition, background, education and contact</xsl:when>
      <xsl:when test="$p = '/evidence'">Every claim on the site, with its source</xsl:when>
      <xsl:when test="$p = '/articles'">Writing on neural network training</xsl:when>
      <xsl:when test="$p = '/dead-channels'">Article, November 2026</xsl:when>
      <xsl:otherwise/>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="kind">
    <xsl:param name="u"/>
    <xsl:choose>
      <xsl:when test="contains($u, '.pdf')">doc</xsl:when>
      <xsl:when test="contains($u, '.txt')">ai</xsl:when>
      <xsl:otherwise>page</xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="row">
    <xsl:variable name="u" select="s:loc"/>
    <li class="row">
      <div class="main">
        <a class="name" href="{$u}">
          <xsl:call-template name="name"><xsl:with-param name="u" select="$u"/></xsl:call-template>
        </a>
        <xsl:variable name="n"><xsl:call-template name="note"><xsl:with-param name="u" select="$u"/></xsl:call-template></xsl:variable>
        <xsl:if test="string($n)"><p class="note"><xsl:value-of select="$n"/></p></xsl:if>
        <span class="url"><xsl:value-of select="substring-after($u, 'https://')"/></span>
      </div>
      <div class="meta">
        <xsl:if test="s:lastmod">
          <span class="date"><b>Updated</b><xsl:value-of select="s:lastmod"/></span>
        </xsl:if>
        <xsl:if test="s:priority">
          <span class="prio" title="Priority {s:priority}">
            <b>Priority</b>
            <i><em style="width:{number(s:priority) * 100}%"></em></i>
          </span>
        </xsl:if>
      </div>
      <xsl:choose>
        <xsl:when test="image:image/image:loc">
          <a class="thumb" href="{$u}"><img src="{image:image/image:loc}" alt="" loading="lazy"/></a>
        </xsl:when>
        <xsl:otherwise><span class="thumb is-empty" aria-hidden="true"></span></xsl:otherwise>
      </xsl:choose>
    </li>
  </xsl:template>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap · Rokib Al Dhin Raadh</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;600;700&amp;family=Instrument+Serif:ital@0;1&amp;family=JetBrains+Mono:wght@400;600&amp;display=swap"/>
        <style>
          :root { --bg:#e7e7e2; --paper:#fbfbf9; --ink:#0f1516; --ink2:#4d575a; --teal:#0b404d; --lime:#d8ee96; --line:rgba(11,64,77,.16); }
          * { box-sizing:border-box; }
          body { margin:0; background:var(--bg); color:var(--ink); font-family:"Funnel Sans",system-ui,sans-serif; -webkit-font-smoothing:antialiased; }
          .top { height:6px; background:var(--teal); }
          .wrap { max-width:1080px; margin:0 auto; padding:48px 24px 72px; }
          .brand { font-family:"Instrument Serif",Georgia,serif; font-size:26px; color:var(--teal); text-decoration:none; }
          .eb { font-family:"JetBrains Mono",monospace; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--ink2); margin:44px 0 10px; display:flex; align-items:center; gap:10px; }
          .eb::before { content:""; width:28px; height:1px; background:var(--teal); }
          h1 { font-family:"Instrument Serif",Georgia,serif; font-weight:400; font-size:clamp(44px,7vw,72px); line-height:.98; letter-spacing:-.02em; color:var(--teal); margin:0 0 18px; }
          h1 em { font-style:italic; color:#146273; }
          .lead { font-size:17px; line-height:1.6; color:var(--ink2); max-width:62ch; margin:0 0 28px; }
          .stats { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; background:var(--line); border:1px solid var(--line); margin:0 0 40px; }
          .stat { background:var(--teal); color:#e9f1f2; padding:16px 18px; }
          .stat b { display:block; font-family:"Instrument Serif",Georgia,serif; font-weight:400; font-size:36px; line-height:1; color:var(--lime); }
          .stat span { font-size:13px; }
          h2 { font-family:"JetBrains Mono",monospace; font-size:12px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); margin:36px 0 12px; display:flex; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; }
          h2 small { color:var(--ink2); font-weight:400; }
          ul { list-style:none; margin:0; padding:0; display:grid; gap:10px; }
          .row { display:grid; grid-template-columns:minmax(0,1fr) 210px 150px; gap:20px; align-items:center; background:var(--paper); border:1px solid var(--line); padding:16px 18px; transition:border-color .2s, transform .2s; }
          .row:hover { border-color:rgba(11,64,77,.42); transform:translateY(-1px); }
          .name { font-size:18px; font-weight:600; color:var(--ink); text-decoration:none; }
          .name:hover { color:var(--teal); text-decoration:underline; text-underline-offset:3px; }
          .note { margin:4px 0 6px; font-size:14px; line-height:1.45; color:var(--ink2); }
          .url { display:block; font-family:"JetBrains Mono",monospace; font-size:12px; color:#6b7477; word-break:break-all; }
          .meta { display:flex; flex-direction:column; gap:8px; font-family:"JetBrains Mono",monospace; font-size:12px; color:var(--ink2); }
          .meta b { display:inline-block; width:70px; font-weight:400; text-transform:uppercase; letter-spacing:.06em; font-size:10.5px; color:#6b7477; }
          .prio { display:flex; align-items:center; }
          .prio i { display:inline-block; width:110px; height:6px; background:rgba(11,64,77,.12); }
          .prio em { display:block; height:100%; background:var(--teal); }
          .thumb.is-empty { display:block; width:150px; }
          .thumb img { display:block; width:150px; aspect-ratio:1200/630; object-fit:cover; border:1px solid var(--line); }
          .foot { margin-top:44px; padding-top:18px; border-top:1px solid var(--line); font-size:13.5px; line-height:1.6; color:var(--ink2); }
          .foot a { color:var(--teal); }
          code { font-family:"JetBrains Mono",monospace; font-size:.92em; background:rgba(11,64,77,.07); padding:1px 5px; }
          @media (max-width:820px) {
            .stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
            .row { grid-template-columns:1fr; gap:12px; }
            .meta { flex-direction:row; flex-wrap:wrap; gap:14px; }
            .thumb img { width:100%; max-width:360px; }
            .thumb.is-empty { display:none; }
          }
        </style>
      </head>
      <body>
        <div class="top"></div>
        <div class="wrap">
          <a class="brand" href="/">Rokib Al Dhin Raadh</a>
          <p class="eb">Sitemap</p>
          <h1>Every page on <em>raadh.me.</em></h1>
          <p class="lead">
            This is the map search engines and AI assistants read to find the site. People can use it too: every page,
            document and AI-readable file is listed below, with when it last changed.
          </p>

          <xsl:variable name="all" select="s:urlset/s:url"/>
          <xsl:variable name="pages" select="$all[not(contains(s:loc,'.pdf')) and not(contains(s:loc,'.txt'))]"/>
          <xsl:variable name="docs" select="$all[contains(s:loc,'.pdf')]"/>
          <xsl:variable name="ai" select="$all[contains(s:loc,'.txt')]"/>

          <div class="stats">
            <div class="stat"><b><xsl:value-of select="count($all)"/></b><span>URLs in total</span></div>
            <div class="stat"><b><xsl:value-of select="count($pages)"/></b><span>pages</span></div>
            <div class="stat"><b><xsl:value-of select="count($docs)"/></b><span>documents</span></div>
            <div class="stat"><b><xsl:value-of select="count($ai)"/></b><span>files for AI assistants</span></div>
          </div>

          <h2>Pages <small><xsl:value-of select="count($pages)"/></small></h2>
          <ul>
            <xsl:for-each select="$pages">
              <xsl:sort select="s:priority" data-type="number" order="descending"/>
              <xsl:call-template name="row"/>
            </xsl:for-each>
          </ul>

          <xsl:if test="$docs">
            <h2>Documents <small><xsl:value-of select="count($docs)"/></small></h2>
            <ul><xsl:for-each select="$docs"><xsl:call-template name="row"/></xsl:for-each></ul>
          </xsl:if>

          <xsl:if test="$ai">
            <h2>For AI assistants <small><xsl:value-of select="count($ai)"/></small></h2>
            <ul><xsl:for-each select="$ai"><xsl:call-template name="row"/></xsl:for-each></ul>
          </xsl:if>

          <p class="foot">
            Machine-readable source: <code>sitemap.xml</code> (Sitemaps protocol 0.9, with image extensions).
            Every claim on the site is listed with its source on the <a href="/evidence">evidence page</a>.
            <br/>© Rokib Al Dhin Raadh · <a href="/">raadh.me</a>
          </p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
