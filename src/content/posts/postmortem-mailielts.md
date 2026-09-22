---
pubDatetime: 2026-09-22T15:10:00+08:00
title: "Postmortem: MailIELTS — an AI writing coach nobody used"
slug: "postmortem-mailielts"
featured: true
draft: false
tags:
  - "Postmortem"
  - "Indie"
  - "SaaS"
description: "714 commits, 6 repos, 467 blog posts in 3 languages, 21 months. Revenue: $0. I read every commit to figure out why it died — and the git history revealed the project's lifecycle was my immigration application's lifecycle."
---

> Autopsy #001 in an ongoing series. I built it, it died, and I read all 714 commits to figure out why. Full index: [github.com/louis-cai/postmortems](https://github.com/louis-cai/postmortems)

**Lifespan:** Dec 2024 – Jul 2026 (21 months)
**Final score:** 714 commits · 6 repos · 467 posts · 3 languages · **$0 revenue**
**Cause of death:** nobody ever asked for it

## What it was

An email-based IELTS General Training writing coach: subscribe with your email, get one letter-writing prompt per day, reply with your letter, get AI band feedback within 24 hours. Trilingual site (English / Chinese / Arabic). Working product, zero friction.

It fully worked. That was never the problem.

## The timeline, told by commit counts

```
Dec 2024  ████████████████████  186   idea → working MVP in 13 days
Jan 2025  ██████████████        129   production: domain, trilingual site, Redis, GA, blog
Feb 2025  █                      11   first death
Mar 2025  ████████               80   resurrection #1: automated article factory
Apr–Jun   ████ each              ~32  content tsunami (90–105 posts/month at peak)
Jul 2025  ██████████████        125   resurrection #2: growth infra (Workers, GA4, n8n, Jira)
Aug 2025  ████                   30
Sep 2025  ██                     16   second death
Nov 2025  ██                     18   resurrection #3: docs (OpenSpec, BMAD, a PRD)
Dec 2025  █                      6
Jan–Jun   (crickets)              2   six months of silence
Jul 18    ███                    17   one Saturday: interactive letter-structure tool
Jul 22    ——————  my wife's Canadian study permit was refused.
                   The project never moved again.
```

I only understood the shape of this after reading the git history. The project's lifecycle was my immigration application's lifecycle. I started it while preparing our file, worked hardest during application season, wrote exactly one Chinese-language article (titled "5 tricks to boost your immigration application acceptance rate" — my own anxiety leaking into the product), shipped one last feature the Saturday before the decision, and it died the same week the permit was refused.

It was never a product for IELTS students. It was a diary for one specific immigrant: me.

## What the data said (and when it said it)

From my own Google Search Console, December 2025:

| Keyword | Impressions | Clicks |
|---|---|---|
| urgent tone | 244 | 0 |
| letter of urgency | 219 | 0 |
| suggestive language | 168 | 0 |
| urgent letter | 155 | 0 |
| urgent letter sample | 12 | 1 |

People were literally asking Google "how do I write an urgent letter" — and my 467 articles answered with "techniques for using adverbs in letters." My own December brainstorm document diagnosed this precisely: content mismatch, GT/Academic confusion, busy adult users, language mismatch. Execution rate of that document: zero.

## Six causes of death

**1. The core hypothesis was never tested.** 714 commits answered engineering questions. Zero commits answered "will a stranger subscribe?" The cheapest test — sending the link to one real IELTS candidate — costs under an hour. I never ran it in 21 months.

**2. Free wasn't a strategy; it was avoidance of pricing.** There is no payment code anywhere in six repos. No price = no willingness-to-pay signal = I threw away the only honest validation metric. Meanwhile I was paying LLM API bills to grade letters nobody sent.

**3. Supply was fully automated; demand acquisition was zero.** An article factory (generate → translate → commit → deploy) ran daily across three languages. The promotion plan listed 10 channels: social media, newsletters, schools, communities. Channels executed: zero. Not one account created, not one external post.

**4. Engineering prosperity as progress.** Every time "no users" hurt, I answered with a build. No conversions → GA4 funnel. Ops fatigue → Cloudflare Workers. Still no users → a Jira board. Still no users → BMAD, OpenSpec, a conversion PRD targeting "300% lift." Putting a Jira board on a zero-user project is performance art. The rule I learned: *if an action doesn't change what a user sees, it's my entertainment, not the project's progress.*

**5. Every resurrection was a mood, not a hypothesis.** Three resurrections (Mar 2025, Jul 2025, Dec 2025), all triggered by renewed hope, all adding supply-side tooling, all dead within weeks — because the one signal that mattered (zero signups) never changed.

**6. It was a product for me, labeled as a product for others.** "Busy adult immigration applicants" was just me. When the visa was refused, the emotional engine died, and so did the project — it had no independent reason to exist.

## What I'd tell past me

1. Launch day is not validation day. Shipping in 13 days proves you can build. It says nothing about whether anyone wants it.
2. Charging isn't about revenue; it's about hearing the truth. A price tag is the cheapest honest interview ever invented. Free products can't even fail clearly.
3. Growth happens outside your own codebase. A 100%-complete article factory with zero readers is a very efficient way to decorate a graveyard.
4. Keyword data is users talking to you. 244 impressions and zero clicks is a product requirement written by the market. Read it before you write another 50 articles.
5. Toolchain upgrades are adult LEGO. They're fun. They're not progress.
6. If it's for you, label it honestly. Building for yourself is fine — but it's a hobby, not a startup.
7. A correct diagnosis that never ships is worth zero. My best document was also my last one. It changed nothing.

## One line

> This project used world-class engineering execution to perfectly answer a question nobody asked.

---

*Written Sept 2026 · More autopsies at [github.com/louis-cai/postmortems](https://github.com/louis-cai/postmortems) · Louis Cai, over-the-hill coder, builder of dead things and a few live ones.*
