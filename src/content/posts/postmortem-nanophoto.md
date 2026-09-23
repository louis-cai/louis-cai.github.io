---
pubDatetime: 2026-09-23T11:20:00+08:00
title: "Postmortem: NanoPhotoStudio — the launch that never happened"
slug: "postmortem-nanophoto"
featured: true
draft: false
tags:
  - "Postmortem"
  - "Indie"
  - "SaaS"
description: "1,648 commits, 282 PRs, 27 weekly visitors, $0 revenue. I built an AI portrait studio in six months and never told a stranger it existed. The full autopsy."
---

> Autopsy #002 in an ongoing series. Read #001, the [MailIELTS postmortem](/posts/postmortem-mailielts/), first if you like. Standalone pages for each autopsy live at [/postmortems/](/postmortems/mailielts.html), and the full index is at [github.com/louis-cai/postmortems](https://github.com/louis-cai/postmortems).

**Lifespan:** Dec 2025 – Jun 2026 (6 months)
**Final score:** 1,648 commits · ~282 PRs · 27 weekly visitors · **$0 revenue**
**Cause of death:** nobody ever found out it existed

## What it was

An AI portrait studio: pick a style, upload a selfie, get a studio-quality portrait back. $1 per portrait, or $4.99 a month for unlimited generations. Under the hood: Next.js 16, Cloudflare Workers, D1, R2, durable generation workflows, magic-link auth, an admin dashboard, face detection, 4K upscaling. Unit, contract, and e2e tests. Every PR through CI.

It fully worked. That was never the problem here either.

## The timeline, told by commit counts

```
Dec 2025  ██████████████        358   idea → full SaaS scaffold in weeks
Jan 2026  ██████████████████████  562   peak: payments, workflows, admin, test pyramid
Feb 2026  ████████████████      400   freemium launches: $4.99 unlimited plan
Mar 2026  ██████                140   $10/day Meta ads test designed, $0 spent
Apr 2026  █████                 116   scoreboard finally built: 27 visitors, 0 orders
May 2026  ███                   70    polish: drawer, headers, contrast, flaky e2e
Jun 2026  █                     2     last commit
```

The curve says it in one line: the month I finally built a scoreboard was the second-to-last month of the project. For five months I measured everything (test coverage, Lighthouse scores, commit velocity) except whether anyone wanted the thing.

## What the data said, when it finally spoke

From my own weekly scoreboard, April 2026:

| Metric | Value |
|---|---|
| Landing sessions per week | 27 |
| Clicks on the main CTA | 0 |
| Paid orders, ever | 0 |

The $4.99 unlimited plan had been live for two months at that point. Total conversions: zero. My own freemium strategy doc opens by admitting this in its first line. Pricing went on to get redesigned three times, and all three designs faced the same audience: twenty-seven people a week.

## The market never had a gap

Paid AI headshots in 2026: HeadshotPro, 196k customers. Aragon, ~2M users. BetterPic, $2.5M seed. And Google's Nano Banana will turn one selfie into a decent portrait, free.

I priced at $1 per portrait. In a market of premium leaders, a dollar doesn't read as accessible. It reads as a trial price. Because it was one.

## Four causes of death

**1. Distribution was a checkbox, never a spend.** In March I designed a $10/day Meta ads test: three angles, six creatives, a production checklist, an ROAS spreadsheet. I never spent a dollar. Building the plan felt like progress. Spending felt like risk. I chose the feeling over the outcome.

**2. The scoreboard arrived on life support.** Five months into a six-month project, I finally measured the only metric that mattered. Twenty-seven weekly visitors. Every conversion experiment before that point was astrology.

**3. Death by comfort.** May, one month after the scoreboard said dead: I redesigned the navigation drawer. Aligned headers to prototypes. Fixed color contrast. Stabilized flaky e2e tests. Polishing CSS for a product nobody visits is not work, it is hiding. I did it for a month.

**4. "Practice project" as shelter.** The practice was real: the stack and the discipline carried into what I build now. But "practice" is also what I hid behind when the data said stop. Same words, two jobs, and I let the honest one cover for the other.

For symmetry with autopsy #001: that one died because I built for an audience of one and called it a market. This one died because I built for everyone and told no one. Same ending either way. The building was real; the contact with humans wasn't.

## What I'd tell past me

1. The first 10 hours of a project go to distribution. Not the last 10, if any.
2. A scoreboard built on day one is a compass. Built on month five, it is an autopsy kit.
3. If nobody knows your product exists, conversion optimization is astrology.
4. Working code is not a launch. Neither is a pricing page.

## One line

> The product was finished. The launch was never scheduled.

---

*Written Sept 2026 · More autopsies at [github.com/louis-cai/postmortems](https://github.com/louis-cai/postmortems) · Louis Cai, over-the-hill coder, builder of dead things and a few live ones.*
