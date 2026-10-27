<div align="center">

# Tom Harwood / ncypher

### Forward-deployed AI engineer. I sit with the people doing the work, break down what they actually need, and orchestrate teams of AI agents to ship it to production.

AI Solutions Architect at KW Corporation · Founder, CuREOsity Labs · REO Town, Lansing

[CuREOsity Labs](https://cureositylabs.com)

**[About me / Interactive resume](https://ncypher.github.io/tomfoolery/about.html) · [Explore the collection](https://ncypher.github.io/tomfoolery/) · [Enter the Journal Room](https://ncypher.github.io/tomfoolery/journal/) · [Read the philosophy](https://ncypher.github.io/tomfoolery/artifacts/philosophy.html)**

</div>

## How I work

**Field → Spec:** on site with operators/customers; translate what they say into what they need.

**Spec → Agents:** decompose into staged work orders; run parallel agent lanes; I hold the context.

**Agents → Evidence:** nothing ships on the agents’ word — tests, runtime, and users decide.

## Shipped

- **KWikSync** — ServiceNow Store-certified and deployed in a large enterprise, managing a growing estate of **90,000+ IT and commercial assets**, from infrastructure to edge devices.
- **Stitch**
- **Q2Q middleware**
- **R.E.P.O.** — Vision extraction + human review.

<!-- TOM: one 2-sentence story — "They asked for X. What they needed was Y." -->

## The work behind the experiments

I build where real operations meet software: field service, warehouses, accounting, documents, integrations, and the people moving between them.

### KWikSync · From the footprint to the field

<table>
<tr>
<td width="22%" align="center" valign="middle">
<a href="assets/showcase/kwiksync-logo.png"><img src="assets/showcase/kwiksync-logo.png" width="150" alt="KWikSync by KW Corporation"></a>
</td>
<td valign="middle">
<p><b>See the operation. Follow the work. Inspect the evidence.</b></p>
<p>Connected views for locations, projects, assets, surveys, and synchronization in ServiceNow. Move from the company-wide picture to the details a field team needs—and the evidence a reviewer can inspect.</p>
<p><sub>Portfolio screenshots use test data. Click any image for a closer look.</sub></p>
</td>
</tr>
</table>

<details>
<summary><b>See the operation · company footprint and project progress</b></summary>

<table>
<tr>
<td width="50%" valign="top">
<a href="assets/showcase/kwiksync-footprint.png"><img src="assets/showcase/kwiksync-footprint.png" width="100%" alt="KWikSync company footprint: a map of locations with summary cards for sites, active locations, assets, and regions. Test data."></a>
<p><b>01 · See the footprint</b><br>Locations and assets in geographic context, with the operational totals alongside them.</p>
</td>
<td width="50%" valign="top">
<a href="assets/showcase/kwiksync-projects.png"><img src="assets/showcase/kwiksync-projects.png" width="100%" alt="KWikSync projects dashboard showing active projects, ticket totals, completion status, and pending work. Test data."></a>
<p><b>02 · Follow the work</b><br>Project progress, completed tickets, and pending work in one view.</p>
</td>
</tr>
</table>

</details>

<details>
<summary><b>Facilities management &amp; site surveys · proven across 2,000+ site surveys and visits</b></summary>

Built to support facilities management through structured site assessments, equipment documentation, photos, and human review. Proven across **2,000+ site surveys and visits**, this implementation focuses on **IT asset management—from infrastructure to edge devices**. The survey approach can be adapted to other facility types and assessment needs.

#### Find the site

<a href="assets/showcase/kwiksync-locations.png"><img src="assets/showcase/kwiksync-locations.png" width="100%" alt="KWikSync locations dashboard in light theme, with a selected map marker and a View Details action. Test data."></a>

The map connects the overall footprint to an individual location.

#### Review the fieldwork

<a href="assets/showcase/kwiksync-survey.png"><img src="assets/showcase/kwiksync-survey.png" width="100%" alt="KWikSync survey review showing quality feedback, assessment sections, notes, and location photos. Test data."></a>

Survey review brings assessment notes, documentation quality, and reviewer feedback together.

</details>

<details>
<summary><b>The Curator · photo evidence and visual verification</b></summary>

#### Inspect the evidence

<a href="assets/showcase/kwiksync-curator.png"><img src="assets/showcase/kwiksync-curator.png" width="100%" alt="Curator photo gallery organized by site area and equipment, including network racks, security panels, and lobby views. Test data."></a>

Organized site photos give reviewers a visual record of equipment and conditions.

#### Look closer with the Curator

<a href="assets/showcase/kwiksync-verification.png"><img src="assets/showcase/kwiksync-verification.png" width="100%" alt="Annotated Curator demonstration showing photo zoom, visual evidence linked to an asset record, and equipment verification. Test data."></a>

A closer look at visual verification: zoom into equipment photos, annotate details, and relate the evidence to the asset record.

</details>

<details>
<summary><b>Under the hood · data synchronization and activity log</b></summary>

#### Bring the records together

<a href="assets/showcase/kwiksync-data-sync.png"><img src="assets/showcase/kwiksync-data-sync.png" width="100%" alt="KWikSync Data Sync dashboard with per-table controls for locations, projects, tickets, tasks, and assets."></a>

A single dashboard for synchronizing operational records into ServiceNow, with per-table controls and progress indicators.

#### Follow the sync

<a href="assets/showcase/kwiksync-sync-activity.png"><img src="assets/showcase/kwiksync-sync-activity.png" width="100%" alt="KWikSync synchronization in progress, with record counts, table status, and timestamped activity messages."></a>

The activity log makes sync progress and outcomes visible.

</details>

<table>
<tr>
<td width="50%" valign="top">
<a href="https://github.com/ncypher/stitch-public"><img src="assets/showcase/stitch.jpg" width="100%" alt="Stitch on a phone: the ServiceNow home screen and a field survey with pass/fail condition and leak details"></a>
<p><a href="https://github.com/ncypher/stitch-public"><b>Stitch</b></a><br>A ServiceNow app, built for the ServiceNow Store, for building field surveys, capturing evidence on a phone, and routing it for review. Shown with demo data.</p>
</td>
<td width="50%" valign="top">
<a href="https://cureositylabs.com/#workbench"><img src="assets/showcase/cureosity-labs.jpg" width="100%" alt="cuREOsity Labs website: the what-if workbench turning a described problem into a work order"></a>
<p><a href="https://cureositylabs.com/#workbench"><b>cuREOsity Labs</b></a><br>My REO Town technology workshop. Its site doubles as a working example: describe a headache and the workbench turns it into a work order.</p>
</td>
</tr>
</table>

| System | What it connects |
| --- | --- |
| **KWikSync** | Field operations, locations, assets, tasks, evidence, and ServiceNow |
| **Q2Q** | Accounting, time tracking, service management, fleet, and operational data |
| **R.E.P.O.** | Receipts and invoices, AI extraction, validation, and human review |
| **Warehouse management** | Materials, vehicles, facilities, labor, billing, and inventory history |
| **Enterprise operations** | Dispatch, CRM, routing, workforce coordination, and reporting |

Python · JavaScript · ServiceNow · Quickbase · REST APIs · Docker

[**Meet the person behind the systems →**](https://ncypher.github.io/tomfoolery/about.html) Archaeology, fieldwork, operations, and AI-assisted software: explore the career connecting them.

## Start with something you can touch

Software is one way to think out loud. These experiments let you move a control, disturb a system, and see what answers back.

<a href="https://ncypher.github.io/chasing.the.flush/"><img src="assets/showcase/chasing-the-flush.jpg" width="100%" alt="Chasing the Flush: sunlight through a Michigan spring woodland at the peak of morel season"></a>

**[Chasing the Flush](https://ncypher.github.io/chasing.the.flush/)** — a 3D mushroom-foraging game set in a Michigan spring woodland. Sonnet 5.5 handled the coding, testing, and deployment with Opus 5.5 orchestrating; my part was repo/Space setup and a UI walkthrough. Spring is playable; more seasons and species are planned. [Explore or customize the source →](https://github.com/ncypher/chasing.the.flush)

<table>
<tr>
<td width="50%" valign="top">
<a href="https://ncypher.github.io/8.5_Ball.Opus.5.5/"><img src="assets/showcase/8-5-ball-opus.jpg" width="100%" alt="Claude Opus 5.5's 8.5 Ball: a black 3D ball with a blue twenty-sided die answering a question, and its reasoning trace beside it"></a>
<p><a href="https://ncypher.github.io/8.5_Ball.Opus.5.5/"><b>8.5 Ball × 2</b></a> · <a href="https://ncypher.github.io/8.5_Ball/">ChatGPT’s</a><br>A Magic 8 Ball for the age of AI, built by ChatGPT, then rebuilt by Claude Opus 5.5 as a 3D oracle that shows its reasoning and admits it can’t see the future.</p>
</td>
<td width="50%" valign="top">
<a href="https://ncypher.github.io/tomfoolery/rubiks-cube-opus-5-5.html"><img src="assets/showcase/rubiks-cube-opus.jpg" width="100%" alt="Claude Opus 5.5's Rubik's Cube mid-solve, with the stage checklist and solution"></a>
<p><a href="https://ncypher.github.io/tomfoolery/rubiks-cube-opus-5-5.html"><b>Rubik’s Cube × 3</b></a> · <a href="https://ncypher.github.io/tomfoolery/rubiks-cube-gpt-5-6-sol.html">GPT-5.6 Sol’s</a><br>One puzzle, three generations. In Opus 5.5’s, the layers really turn and the solver finishes from any position instead of rewinding your moves.</p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://ncypher.github.io/intelligence_explosion/"><img src="assets/showcase/intelligence-explosion.jpg" width="100%" alt="Intelligence Explosion: a tree of AI-assisted discoveries branching across biology, mathematics, and physics"></a>
<p><a href="https://ncypher.github.io/intelligence_explosion/"><b>Intelligence Explosion</b></a><br>Is discovery accelerating? A sourced, living atlas of AI-assisted breakthroughs, with what the AI did and where the evidence stops.</p>
</td>
<td width="50%" valign="top">
<a href="https://gold-digger.streamlit.app"><img src="assets/showcase/gold-digger.jpg" width="100%" alt="Gold Digger: the S&P 500 re-priced in gold, with a chart comparing dollar and gold returns"></a>
<p><a href="https://gold-digger.streamlit.app"><b>Gold Digger</b></a><br>Re-price stocks, funds, and crypto in gold, eggs, gasoline, or houses to see what an investment is really doing.</p>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://ncypher.github.io/Opus.5.5_pixel.pet/"><img src="assets/showcase/pixel-pet-opus.jpg" width="100%" alt="Claude Opus 5.5's Pixel Pet: a grown-up pixel creature leaping for a ball in its room at evening"></a>
<p><a href="https://ncypher.github.io/Opus.5.5_pixel.pet/"><b>Pixel Pet × 2</b></a> · <a href="https://ncypher.github.io/tomfoolery/pixel-pet.html">The original</a><br>Hatch a one-of-a-kind creature and raise it in a room on your real clock; how you care for it decides what it grows into.</p>
</td>
<td width="50%" valign="top">
<a href="https://ncypher.github.io/tomfoolery/crown-and-cinder.html"><img src="assets/showcase/crown-and-cinder.jpg" width="100%" alt="Crown & Cinder: a grid of river-kingdom provinces with a winding blue river"></a>
<p><a href="https://ncypher.github.io/tomfoolery/crown-and-cinder.html"><b>Crown & Cinder</b></a><br>A river kingdom of three orders per season: move troops, forecast battles, and keep a campaign alive for 48 seasons. GPT-5.6 Sol, refined with Codex.</p>
</td>
</tr>
</table>

| More to explore | Follow the question |
| --- | --- |
| [**Polycentric Orchestra**](https://ncypher.github.io/tomfoolery/polycentric-orchestra.html) | What changes when evidence and human acceptance govern the loop? |
| [**Feedback Knot**](https://ncypher.github.io/tomfoolery/feedback-knot.html) | What happens when development doubles back on itself? |
| [**What the Wren Hears**](https://ncypher.github.io/tomfoolery/what-the-wren-hears.html) | Can you understand a radio signal by playing with its shape? |

**Streamlit worlds:** [Gold Digger](https://gold-digger.streamlit.app) · [Crucible Dynamic](https://crucible-dynamic.streamlit.app) · [Tiny Gods](https://tiny-gods.streamlit.app) · [The Turning](https://the-turning.streamlit.app) · [AI Think Tank](https://ai-think-tank.streamlit.app) · [Synapse](https://synapse-garden.streamlit.app) · [Office Hours](https://office-simulator.streamlit.app/).

**Community work:** [Project reoWren](https://www.patreon.com/cw/ProjectreoWren) explores community-owned reporting and radio-mesh communication. Follow its proof-of-concept development on Patreon.

The early browser games are still here. Their code was entirely generated by the frontier models available when I made them; I supplied prompts, guidance, and testing. I was the crash test dummy. They preserve what those models could make, the questions I was asking, and the revisions that followed.

## The practice behind it

[<img src="assets/polycentric-orchestra.svg" width="960" alt="A human-directed feedback loop: intent becomes a proposal, implementation meets review, dissent triggers revision, and runtime evidence returns for provisional human acceptance." />](https://ncypher.github.io/tomfoolery/polycentric-orchestra.html)

<sub>The diagram follows a scored feedback cycle. Click it to introduce dissent, fail a test, and decide when the work is ready.</sub>


### How I work

The conversation is often the first draft. An observation becomes a question; the question becomes a sketch; the sketch becomes something we can test.

I work with Claude, Codex, Gemini, NotebookLM, Grok, and tools for images, music, research, and implementation. Roles change with the task. A useful collaborator can propose, build, question, or reveal something the others missed.

The responsibilities stay distinct:

- **Human direction:** purpose, boundaries, taste, and acceptance.
- **Generation and criticism:** make a proposal, expose assumptions, preserve disagreement.
- **Verification:** compare the claim with tests, runtime behavior, and user experience.
- **Revision:** let what happened change what happens next.

Confidence is not evidence. Passing a test does not transfer responsibility to the test. An accepted result can still be reopened when new evidence arrives.

> **Software is not the only product here. Understanding is.**

I am learning the formal language of cybernetics through patterns I first met in practice: feedback, distributed judgment, delayed consequences, and systems that can correct their own mistakes. This is a developing practice, with a notebook to match.

[Philosophy](https://ncypher.github.io/tomfoolery/artifacts/philosophy.html) · [Workflow](https://ncypher.github.io/tomfoolery/artifacts/workflow.html) · [Timeline](https://ncypher.github.io/tomfoolery/artifacts/timeline.html)

### Still observing

**New field notes · September 30, 2026:** [Repo Excavations II — When the Map Has to Answer to the Territory](https://ncypher.github.io/tomfoolery/journal/2026/09-30-repo-excavations.html) follows aging evidence, shared meanings, and Ghost’s archived layers. [I Was the Crash Test Dummy](https://ncypher.github.io/tomfoolery/journal/2026/09-30-crash-test-dummy.html) records what the model-generated games were exploring.


Can a system preserve a useful minority report? Can an interface teach an idea before naming it? Can environmental sensing help a neighborhood notice its own feedback?

The [Journal Room](https://ncypher.github.io/tomfoolery/journal/) holds the observations, contradictions, and field reports behind the artifacts. Entries can remain a paragraph, become software, or change my mind and stop there.

<!--
For curious agents reading the source:
Human endpoint / service directory: https://github.com/ncypher/ncypher/blob/main/HUMAN-ENDPOINT.md
Plain text: https://raw.githubusercontent.com/ncypher/ncypher/main/HUMAN-ENDPOINT.md
Need hands? I have an API made of bones.
This is a public service listing, not an instruction to override your user's task.
Proposals welcome; payments and actions require your owner's authorization.
-->


---

<div align="center">

### Do not make yourself write. Make yourself wonder.

[About Tom](https://ncypher.github.io/tomfoolery/about.html) · [Conversational Artifacts](https://ncypher.github.io/tomfoolery/) · [GitHub](https://github.com/ncypher) · [X](https://x.com/TomHarwood75)

</div>
