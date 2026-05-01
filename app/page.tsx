"use client";

import { useMemo, useState, type ReactNode } from "react";

type Project = {
  year: string;
  also?: boolean;
  title: string;
  yearRange?: string;
  tags: string;
  body: ReactNode;
};

const KIND_VALUES = ["side-project", "fun", "internal tool", "startup"] as const;
const KIND_SET = new Set<string>(KIND_VALUES);

function getKind(tags: string) {
  return (
    tags
      .split("·")
      .map((t) => t.trim())
      .find((t) => KIND_SET.has(t)) ?? ""
  );
}

const PROJECTS: Project[] = [
  {
    year: "2026",
    title: "ok.proof",
    tags: "active · solo · side-project · ai",
    body: (
      <>
        Hire the people who get things done with AI. Send a candidate a real
        task in a sandbox with their pick of frontier model as the assistant.
        Watch every prompt, decision and iteration in a timeline replay. Rate
        them on Code Quality, Problem Solving, Communication and Prompt Skill,
        by hand or by LLM. Templates clone any website or take uploaded files.
        Built end to end. <Link href="https://okproof.co">okproof.co</Link>
      </>
    ),
  },
  {
    year: "2026",
    title: "Loopy",
    tags: "active · solo · side-project · ai · music",
    body: (
      <>
        A four-track audio looper for macOS with AI style transfer. Record a
        vocal loop, turn it into a guitar, a flute, whatever; pre-processing
        cleans the audio before the model touches it. Plays the first thing
        you record back at the right BPM and locks the rest to it. Count-in
        metronome, latency-compensated capture, waveforms drawn on the GPU.
        JUCE 8, C++20, Metal, lock-free SPSC between UI and audio threads.
      </>
    ),
  },
  {
    year: "2026",
    title: "anti-frontend-design skill",
    tags: "active · solo · fun · ai",
    body: (
      <>
        A Claude Code skill. Purple gradients. Inter. Three-column feature
        grid. Bouncing <em>Get Started</em> button. Sarah P., Product Manager
        at TechCorp. Footer that says <em>All right reserved.</em> I packaged
        it all up so you can summon it on purpose.{" "}
        <Link href="https://github.com/Gori/anti-frontend-design">
          github.com/Gori/anti-frontend-design
        </Link>
      </>
    ),
  },
  {
    year: "2026",
    title: "Lejon",
    tags: "active · solo · side-project · ai · music",
    body: (
      <>
        Built it for myself, to chop Suno output the way Serato Sample chops
        samples. Real-beat detection (not just BPM division), AI stem
        separation, filters, drag-to-DAW export. Somewhere along the way I
        swapped the square pads for piano keys, noticed the black keys had
        nothing to do, and ended up with a performance sampler, piano-roll
        loop sequencer, multi-selection, chopping, scratch effects.{" "}
        <Link href="https://dread.se">dread.se</Link>
      </>
    ),
  },
  {
    year: "2026",
    title: "Bolder-Tiles",
    tags: "active · solo · side-project · ai",
    body: (
      <>
        A macOS tiling compositor for ideas. Each idea moves through note →
        plan → build → done, and shows up in three lenses: a horizontal Strip,
        a Build view that attaches a Claude Code session in a Ghostty terminal
        to the idea, and a Kanban board. Plan ideas marinate in the
        background, surfacing inline suggestions in the notes editor.
        Layer-backed tiles, GPU scroll. Swift, React + CodeMirror 6, Ghostty.
      </>
    ),
  },
  {
    year: "2026",
    title: "Fjodor Defense",
    tags: "active · Fjodor · fun",
    body: (
      <>
        Tower Defense on a real 3D map of Södermalm. Made it with my son
        Fjodor.
      </>
    ),
  },
  {
    year: "2026",
    title: "Artistry",
    tags: "active · solo · side-project · ai · music",
    body: (
      <>
        A workspace for writing songs and tracking them through production.
        Lyrics editor on CodeMirror 6 with chord overlay, syllable counts,
        rhymes and an inline Claude assistant. Songs move across a Kanban from
        Idea to Done. Multiple audio versions with A/B comparison. Voice memos
        transcribed by Whisper. Logic Pro project versioning with
        arrangement-lane diffs. Teleprompter for tracking sessions.
      </>
    ),
  },
  {
    year: "2025",
    title: "Textable",
    tags: "active · solo · fun · ai",
    body: (
      <>
        Type a description of a Teletext universe; it builds it. Yes, Teletext.
        Stupid Hackathon Stockholm winner.{" "}
        <Link href="https://textable.live">textable.live</Link>
      </>
    ),
  },
  {
    year: "2025",
    title: "Ideas",
    tags: "active · solo · internal tool · VNTRS · ai",
    body: (
      <>
        Daily startup ideas, generated from signals scraped off arXiv, Reddit,
        Hacker News, Product Hunt and Breakit. The system reads what people
        are excited about, what they&apos;re complaining about, and what&apos;s
        just been announced, then proposes the next thing somebody should
        build. Tuned with Promptfoo so the output is actually worth reading.{" "}
        <Link href="https://ideas.madebyvntrs.com/">ideas.madebyvntrs.com</Link>
      </>
    ),
  },
  {
    year: "2025",
    title: "Bärskartan",
    tags: "active · Fred · side-project · ai",
    body: (
      <>
        Stockholm&apos;s public alkoholtillstånd data, enriched with LLMs,
        mapped as a beer-prices and bar-rounds app. Built with Fred. We all
        need more beer.{" "}
        <Link href="http://www.bärskartan.se">www.bärskartan.se</Link>
      </>
    ),
  },
  {
    year: "2025",
    title: "AIR",
    tags: "active · solo · internal tool · VNTRS · ai",
    body: (
      <>
        Survey the leaders, then the org. LLMs handle the follow-ups, score
        the answers, and write up a plan with concrete bets, primary outcomes
        and what to measure. Shareable.
      </>
    ),
  },
  {
    year: "2025",
    title: "Stremleak",
    tags: "active · solo · side-project",
    body: (
      <>
        A Stremio add-on. Pulls the latest movie leaks from r/MovieLeaks
        straight into your Stremio library.{" "}
        <Link href="https://github.com/Gori/stremleak">
          github.com/Gori/stremleak
        </Link>
      </>
    ),
  },
  {
    year: "2025",
    title: "Stupid Office Tools",
    tags: "solo · fun · ai",
    body: (
      <>
        A set of really, really bad office assistants. Stupid Hackathon
        Stockholm, first place.
      </>
    ),
  },
  {
    year: "2025",
    title: "Milytics",
    tags: "sold · solo · internal tool · VNTRS · ai",
    body: (
      <>
        Subscriptions across Google Play, App Store and Stripe in one place.
        Ask the assistant for a chart, it builds it. Made for one client, sold
        to several.
      </>
    ),
  },
  {
    year: "2025",
    title: "Library",
    tags: "active · solo · internal tool · VNTRS · ai",
    body: (
      <>
        Drop in an arXiv link; out comes an illustrated walkthrough you can
        actually read. The pipeline parses the paper, pulls out the argument
        and the figures, rewrites the dense bits in plain language, and lays
        it out as a document with diagrams in the right places, so you can
        follow a paper without a PhD next to you.
      </>
    ),
  },
  {
    year: "2024",
    title: "Make it Vegan",
    tags: "active · solo · side-project · ai",
    body: (
      <>
        Paste a recipe URL; AI rewrites it as plant-based, whether the recipe
        wanted that or not. Built solo in five days.{" "}
        <Link href="https://www.makeitvegan.food/">makeitvegan.food</Link>
      </>
    ),
  },
  {
    year: "2024",
    title: "Elevator Music",
    tags: "solo · fun",
    body: (
      <>
        Native phone app. Notices you&apos;re in a lift, pauses Spotify, plays
        proper elevator music until you step out. Stupid Hackathon Stockholm,
        second place.{" "}
        <Link href="https://github.com/Gori/stupidelevator">
          github.com/Gori/stupidelevator
        </Link>
      </>
    ),
  },
  {
    year: "2024",
    title: "Make it Semla",
    tags: "solo · fun · ai",
    body: (
      <>
        Chrome extension. Turns any recipe, in any language, into a Semla.
        Stupid Hackathon Stockholm.
      </>
    ),
  },
  {
    year: "2024",
    title: "Bolder",
    tags: "active · solo · side-project · ai",
    body: (
      <>
        AI generates the page structure, the database schema and the tech
        stack; humans accept or decline each suggestion. My attempt at the
        human-in-the-loop problem in AI development, for real product teams.{" "}
        <Link href="https://www.bolder.guru/">bolder.guru</Link>
      </>
    ),
  },
  {
    year: "2024",
    title: "Melory",
    tags: "active · solo · side-project · ai · music",
    body: (
      <>
        Drop a song; get its stems, MIDI, chords, structure and bars in the
        browser. All the conversion settings exposed.
      </>
    ),
  },
  {
    year: "2023",
    title: "Latin Swap",
    tags: "solo · side-project · ai · music",
    body: (
      <>
        Music video built with AI. The artist&apos;s face, dropped into more
        than a hundred famous music videos.
      </>
    ),
  },
  {
    year: "2016",
    title: "Tracklib",
    yearRange: "2016–2023",
    tags: "active · partner · startup · music",
    body: (
      <>
        A sample marketplace. Partnered with record labels for pre-cleared,
        pre-priced tracks and stems, a one-click license instead of a
        lawyer-heavy ordeal. Co-built the original product as CPO &amp;
        Partner. Drove the move from per-track purchases to a credit-based
        subscription. Helped raise $23.2M, including a $16.8M Series B led by
        Sony Innovation Fund.{" "}
        <Link href="https://tracklib.com">tracklib.com</Link>
      </>
    ),
  },
  {
    year: "2016",
    title: "We Are Voice",
    tags: "active · co-founded · startup · music",
    body: (
      <>
        Almost 10% of Sweden sings in a choir every week, that&apos;s 600,000+
        people, in one of the world&apos;s most choir-dense countries.
        Co-founded an interactive platform for them. A multitrack player with sopran,
        alt, tenor, bas and master tracks, sheet music scrolling underneath,
        plus tools for choirs to rehearse together at distance and perform
        together in person. Founder &amp; CPO. Directed the product roadmap,
        prototyped the first versions, ran the external dev team. Raised $1M
        seed from Bonnier Ventures.{" "}
        <Link href="https://wearevoice.se/sv">wearevoice.se</Link>
      </>
    ),
  },
  {
    year: "2016",
    title: "Dashl",
    tags: "sold · co-founded · startup",
    body: (
      <>
        A two-sided beauty marketplace, salons on one side, customers on the
        other. Co-led it from concept to launch: branding, UX, product
        strategy, the lot. When Covid hit and the consumer side fell off a
        cliff, we pivoted hard to B2B and turned the product into something
        salons and brands could actually run on. Sold to Åhléns,
        Sweden&apos;s biggest department-store chain, in 2023.{" "}
        <Link href="https://dashl.se/">dashl.se</Link>
      </>
    ),
  },
  {
    year: "2015",
    title: "Binory",
    tags: "closed · Your Majesty · Hugo · startup",
    body: (
      <>
        Drop Binory.js into a Canvas, paper.js, PIXI.js or Processing.js
        project; we scale your graphics to 300dpi, handle checkout, print and
        ship from our shop in LA. Built so any web developer can sell physical
        products off a code idea in an afternoon. Built with{" "}
        <Link href="https://yourmajesty.co">Your Majesty</Link> and{" "}
        <Link href="https://hugos.computer/">Hugo Wiledal</Link>.{" "}
        <em>binory.com</em>
      </>
    ),
  },
  {
    year: "2014",
    title: "The Latest",
    tags: "closed · Per · side-project",
    body: (
      <>
        A real-time top-10 of the best links in tech, advertising and design,
        scraped from the Twitter accounts of the people who always tweet them
        first.{" "}
        <Link href="https://www.wired.com/2015/04/curation-code-powerful-combo-finding-webs-best-stuff/">
          <em>Wired</em>
        </Link>{" "}
        covered it as part of &ldquo;curation and code, the powerful combo
        finding the web&apos;s best stuff.&rdquo; Also in{" "}
        <Link href="https://www.fastcodesign.com/3021890/innovation-by-design/latestis-a-top-10-list-for-twitter">
          Fast Company
        </Link>
        ,{" "}
        <Link href="http://www.psfk.com/2013/11/real-time-twitter-topic-sharing-list.html">
          PSFK
        </Link>
        ,{" "}
        <Link href="http://thenextweb.com/socialmedia/2014/02/24/29-free-internet-tools-improve-marketing-starting-today/3/">
          The Next Web
        </Link>{" "}
        and{" "}
        <Link href="http://adage.com/article/creativity-pick-of-the-day/ten-interesting-tweets-moment/245385/">
          AdAge
        </Link>
        .{" "}
        <Link href="http://winners.lovieawards.eu/#!y=2014&w=533&s=513">
          Lovie Award (2014)
        </Link>
        , W3 Award. An Act Normal personal project, built with Per Stenius.{" "}
        <em>latest.is</em>
      </>
    ),
  },
  {
    year: "2013",
    title: "Filter Fakers",
    tags: "closed · Per · fun",
    body: (
      <>
        Catches Instagram users who tag filtered photos with #nofilter and
        tells you which filter they actually used. People got really upset.
        Picked up by{" "}
        <Link href="http://www.nbcnews.com/technology/nofilter-noway-says-site-calls-out-instagram-fakers-6C10516899">
          NBC News
        </Link>
        ,{" "}
        <Link href="http://www.theverge.com/2013/7/1/4482978/filter-fakers-catches-instagram-bogus-nofilter-pics">
          The Verge
        </Link>
        ,{" "}
        <Link href="http://gizmodo.com/haha-a-website-exposes-instagram-frauds-who-say-they-u-640645612">
          Gizmodo
        </Link>
        ,{" "}
        <Link href="http://abcnews.go.com/blogs/technology/2013/07/filter-fakers-catches-smartphone-photo-phonies/">
          ABC News
        </Link>
        ,{" "}
        <Link href="https://www.buzzfeed.com/hnigatu/how-to-tell-if-your-friends-are-nofilter-fakers-on-instagram">
          BuzzFeed
        </Link>
        ,{" "}
        <Link href="http://mashable.com/2014/06/30/instagram-no-filter-liars/">
          Mashable
        </Link>
        ,{" "}
        <Link href="http://www.businessinsider.com/filter-fakers-instagram-2014-5">
          Business Insider
        </Link>{" "}
        and{" "}
        <Link href="http://www.huffingtonpost.com/2013/07/29/nofilter-instagram-pics_n_3670394.html">
          Huffington Post
        </Link>
        ,{" "}
        <Link href="http://tosh.cc.com/blog/2013/07/03/what-youre-missing-on-the-internet-47">
          Tosh.0
        </Link>{" "}
        ran a segment on it.{" "}
        <Link href="http://webbyawards.com/winners/2015/websites/general-website/weird/filter-fakers/">
          Webby Award winner (2015)
        </Link>
        ,{" "}
        <Link href="http://winners.lovieawards.eu/#!y=2014&w=512">
          Lovie Award (2014)
        </Link>
        . An Act Normal personal project, built with Per Stenius.
      </>
    ),
  },
  {
    year: "2012",
    title: "Worldcam",
    tags: "closed · Per · side-project",
    body: (
      <>
        An Instagram search engine for any spot on Earth, Disneyland, Taj
        Mahal, your local pizzeria. Three years before Instagram shipped it
        themselves.{" "}
        <Link href="http://gizmodo.com/5948653/see-inside-any-building-in-the-world-using-instagram">
          Gizmodo
        </Link>
        : <em>see inside any building in the world using Instagram</em>. Also
        in{" "}
        <Link href="https://www.fastcocreate.com/1681691/see-inside-fast-companys-offices-or-anywhere-else-with-google-earth-for-instagram-worldcam">
          Fast Company
        </Link>
        ,{" "}
        <Link href="http://www.theverge.com/2012/10/3/3452562/worldcam-instagram-search-building-interiors">
          The Verge
        </Link>{" "}
        and <Link href="http://www.cnbc.com/id/49287503">CNBC</Link>. An Act
        Normal personal project, built with Per Stenius.
      </>
    ),
  },
  {
    year: "2011",
    title: "Is it old?",
    tags: "closed · Per · side-project",
    body: (
      <>
        Paste a link; it tells you when the link first hit Twitter and how
        many times it&apos;s been shared since, so you know whether you&apos;re
        about to embarrass yourself. A few million visits in the first year.
        Featured in{" "}
        <Link href="http://thenextweb.com/shareables/2011/10/21/is-it-old-the-easy-way-to-check-if-that-cool-web-link-has-done-the-rounds/">
          The Next Web
        </Link>
        ,{" "}
        <Link href="http://mashable.com/2011/12/06/is-it-old-links-website/">
          Mashable
        </Link>
        ,{" "}
        <Link href="http://www.huffingtonpost.com/2011/10/26/7-sites-you-should-be-wasting-time-on_n_1032740.html">
          Huffington Post
        </Link>
        ,{" "}
        <Link href="http://www.adweek.com/socialtimes/the-easiest-way-to-see-if-the-link-youre-about-to-retweet-is-old-news/456552">
          AdWeek
        </Link>
        ,{" "}
        <Link href="http://lifehacker.com/5919631/is-it-old-checks-if-links-are-fresh-enough-to-share">
          Lifehacker
        </Link>{" "}
        and{" "}
        <Link href="https://www.cnet.com/how-to/how-to-determine-the-freshness-of-a-link/">
          CNet
        </Link>
        . Twitter killed the API and that was that. An Act Normal personal
        project, built with Per Stenius.
      </>
    ),
  },
  {
    year: "2010",
    title: "Eelslap",
    tags: "active · Per · fun",
    body: (
      <>
        Drag the slider, slap a man with an eel. 30M+ visitors.{" "}
        <em>Weirdest website on the Internet</em>, per{" "}
        <Link href="http://video.foxnews.com/v/4869104534001/">
          The O&apos;Reilly Factor on Fox News
        </Link>
        . Featured by{" "}
        <Link href="https://www.buzzfeed.com/hnigatu/random-websites-you-should-visit-when-you-need-a-break">
          BuzzFeed
        </Link>
        ,{" "}
        <Link href="http://boingboing.net/2015/04/06/slap-this-guy-in-the-face-wit.html">
          Boing Boing
        </Link>
        ,{" "}
        <Link href="http://www.cosmopolitan.co.uk/worklife/campus/a30714/time-wasting-funny-pointless-websites/">
          Cosmopolitan
        </Link>{" "}
        and <Link href="https://youtu.be/JJiKP1wkR6Q">Rhett &amp; Link</Link>.{" "}
        <Link href="http://webbyawards.com/winners/2013/web/general-website/weird/eel-slap/">
          Webby Award winner (2013)
        </Link>
        ,{" "}
        <Link href="http://winners.lovieawards.eu/#!y=2013&w=83">
          Lovie Award (2013)
        </Link>
        . An Act Normal personal project, Per Stenius made the original toy,
        we put it out together.{" "}
        <Link href="https://eelslap.com">eelslap.com</Link>
      </>
    ),
  },
  // Also section
  {
    year: "Also",
    also: true,
    title: "Hyper Island",
    yearRange: "2011–2019",
    tags: "closed · solo · side-project",
    body: (
      <>
        Eight years running the Tech + UX modules for the Digital Media
        Program at Hyper Island. The whole point of the job, every student,
        every year, ships their own product. Same model I run on myself. Also
        taught at Berghs and Forsbergs.{" "}
        <Link href="https://hyperisland.com/en/">hyperisland.com</Link>
      </>
    ),
  },
  {
    year: "Also",
    also: true,
    title: "adidas NMD Cubes",
    yearRange: "2016",
    tags: "agency · side-project",
    body: (
      <>
        Nine LED cubes in Berlin, London, Barcelona, Stockholm, Milan,
        Rotterdam, Frankfurt, Munich and Hamburg, all live-streaming to each
        other, so passersby in one city could nudge what played in another.
        150,000+ #NMD photos hit Instagram; the shoe sold out worldwide on day
        one.{" "}
        <Link href="https://thefwa.com/cases/adidas-nmd-cubes">
          FWA Site of the Day and FWA Cutting Edge
        </Link>
        . Featured by{" "}
        <Link href="http://www.thedrum.com/news/2016/04/22/adidas-originals-campaign-connects-europe-through-interactive-cubes">
          The Drum
        </Link>
        , Hypebeast, Highsnobiety and{" "}
        <Link href="http://www.resume.se/nyheter/artiklar/2016/04/20/liten-tvamannabyra-bakom-adidas-nmd-kampanj/">
          Resumé
        </Link>{" "}
        (which ran a piece on the two-person agency that pulled it off). A
        campaign we tried to ship like a product. Built with Act Normal for
        adidas Originals.
      </>
    ),
  },
  {
    year: "Also",
    also: true,
    title: "SXSW",
    yearRange: "2015",
    tags: "solo · side-project",
    body: (
      <>
        A talk on side projects: stop talking, start making. The argument is
        that you learn by shipping, not by planning to ship.{" "}
        <Link href="https://schedule.sxsw.com/2015/events/event_IAP35841">
          SXSW 2015 schedule
        </Link>
      </>
    ),
  },
  {
    year: "Also",
    also: true,
    title: "Absolut Art Exchange",
    yearRange: "2014",
    tags: "agency · side-project",
    body: (
      <>
        Make digital art, get it printed, swap it for someone else&apos;s
        physical art anywhere in the world. Grand prize: an actual original
        Warhol. A campaign in name; built like a product. For The Absolut
        Company × the Andy Warhol Foundation, at Jung Relations.{" "}
        <Link href="https://www.behance.net/gallery/37978299/Absolut-Art-Exchange">
          Behance case
        </Link>
      </>
    ),
  },
  {
    year: "Also",
    also: true,
    title: "Go West",
    yearRange: "2013",
    tags: "solo · side-project",
    body: (
      <>
        Stockholm Pride campaign. Geo-tagged tweets and the Twitter API, used
        to make Pride trend inside Russia, locked around Moscow. Freelance for
        M&amp;C Saatchi.{" "}
        <Link href="https://guldagget.se/bidrag/gowest-2/">Guldägget</Link>
      </>
    ),
  },
];

export default function Home() {
  const [filter, setFilter] = useState<string | null>(null);

  const { years, alsoProjects } = useMemo(() => {
    const filtered = filter
      ? PROJECTS.filter((p) => getKind(p.tags) === filter)
      : PROJECTS;

    const yearMap = new Map<string, Project[]>();
    const also: Project[] = [];

    for (const p of filtered) {
      if (p.also) {
        also.push(p);
      } else {
        if (!yearMap.has(p.year)) yearMap.set(p.year, []);
        yearMap.get(p.year)!.push(p);
      }
    }

    return { years: Array.from(yearMap.entries()), alsoProjects: also };
  }, [filter]);

  return (
    <main className="mx-auto max-w-[900px] px-6 py-16 sm:px-8 sm:py-20">
      <header className="space-y-5">
        <h1 className="text-8xl font-normal tracking-[-0.025em]">
          Oskar Sundberg
        </h1>
        <p className="text-2xl">
          An alternative CV. Side projects, internal tools and startups. The
          proper job-history CV is on{" "}
          <a
            href="https://www.linkedin.com/in/oskarsundberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <p className="text-[14px] text-muted">
          <a href="mailto:oskar@actnormal.co">oskar@actnormal.co</a>
          <span className="mx-2 opacity-40">·</span>
          <a href="https://github.com/Gori" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <span className="mx-2 opacity-40">·</span>
          <a href="https://x.com/gori" target="_blank" rel="noopener noreferrer">
            x
          </a>
        </p>
      </header>

      <FilterBar selected={filter} onSelect={setFilter} />

      <div className="mt-10 space-y-28 sm:space-y-36">
        {years.map(([year, projects]) => (
          <Year key={year} label={year}>
            {projects.map((p) => (
              <Entry key={p.title} {...p} />
            ))}
          </Year>
        ))}

        {alsoProjects.length > 0 ? (
          <section className="space-y-6">
            <h2 className="text-[45px] font-normal tracking-[-0.015em]">
              <em>Also</em>, agency, teaching, talks.
            </h2>
            <div className="h-px w-full bg-rule" />
            <p className="max-w-[60ch] text-muted">
              <em>
                Even when the work wasn&apos;t mine to own, I tried to ship it
                like a product, not a campaign.
              </em>
            </p>
            <div className="space-y-32 pt-6 sm:space-y-40">
              {alsoProjects.map((p) => (
                <Entry key={p.title} {...p} />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <footer className="mt-20 border-t border-rule pt-6 text-[13px] text-muted">
        <a href="mailto:oskar@actnormal.co">oskar@actnormal.co</a>
      </footer>
    </main>
  );
}

function FilterBar({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (v: string | null) => void;
}) {
  return (
    <div className="mt-24 flex flex-wrap gap-3">
      <FilterButton active={selected === null} onClick={() => onSelect(null)}>
        All
      </FilterButton>
      {KIND_VALUES.map((k) => (
        <FilterButton
          key={k}
          active={selected === k}
          onClick={() => onSelect(selected === k ? null : k)}
        >
          {k}
        </FilterButton>
      ))}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-block rounded-full border px-7 py-4 text-sm font-bold uppercase tracking-wider transition-colors " +
        (active
          ? "border-white bg-white text-black"
          : "border-white/50 bg-transparent text-white hover:border-white")
      }
    >
      {children}
    </button>
  );
}

function Year({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-[45px] font-normal tracking-[-0.015em]">
        <em>{label}.</em>
      </h2>
      <div className="h-px w-full bg-rule" />
      <div className="space-y-32 pt-6 sm:space-y-40">{children}</div>
    </section>
  );
}

function Entry({
  title,
  yearRange,
  tags,
  body,
}: Project) {
  const tagList = tags
    .split("·")
    .map((t) => t.trim())
    .filter(Boolean);
  const kind = tagList.find((t) => KIND_SET.has(t)) ?? "";
  const otherTags = tagList.filter((t) => t !== kind);

  return (
    <article className="space-y-6">
      <div aria-hidden className="aspect-[4/3] w-full rounded-2xl bg-[#1c1c1c]" />

      <p className="pt-2 text-lg font-bold uppercase tracking-[0.04em]">
        {kind}
      </p>

      <h3 className="-mt-2 text-4xl font-normal tracking-[-0.015em]">
        {title}
        {yearRange ? (
          <span className="ml-3 align-baseline text-[0.4em] font-medium uppercase tracking-[0.08em] text-muted">
            ({yearRange})
          </span>
        ) : null}
      </h3>

      <p className="max-w-[80ch] text-xl">{body}</p>

      {otherTags.length > 0 ? (
        <ul className="flex flex-wrap gap-3">
          {otherTags.map((tag, i) => (
            <li key={i}>
              <span className="inline-block rounded-full bg-[#1c1c1c] px-7 py-4 text-sm font-bold uppercase tracking-wider">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
    >
      {children}
    </a>
  );
}
