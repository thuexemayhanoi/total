# P0-02 — Final QA, Diff and Rollback Report

**Mode:** Isolated feature branch only. **NO production merge, deploy, Writer activation, article edit or SEO mutation.**

## Audit snapshot and source of truth

| Item | Verified |
|---|---|
| Repository | `thuexemayhanoi/total` |
| Base / current production main | `4abd309241d3ae825b523fe30655167fa4c7183d` |
| Feature branch | `fix/p0-02-manifest-completeness-20261013` |
| Code QA commit | `b1525b6758fdbe95936aa461d3aa05c2e5a16ddf` |
| Candidate manifest commit | `d90c3a4835b781990be05ffb21f73c9fc19a52e6` |
| Latest QA workflow | [P0-02 branch QA 38374932374](https://github.com/thuexemayhanoi/total/actions/runs/38374932374) — **SUCCESS** |
| Git comparison | branch 7 commits ahead, 0 behind `main`; 9 changed files |

### Strict completeness evidence

At this snapshot, `factory/state/matrix.json` has **1,380 slots**, of which **1,066 PUBLISHED**.

- Production `article-manifest.jsonl`: **322 rows**. Deficit vs PUBLISHED: **744**.
- Branch candidate `article-manifest.jsonl`: **1,066 rows**, **1,066 distinct IDs**.
- Every published ID is present: **0 missing**.
- Per-published ID slug, cluster/hub and `qa_status=pass` agree with Matrix: **0 mismatches**.
- No extra manifest rows for nonpublished slots in this snapshot.
- `index-check` now rejects an apparently hash-consistent derived index backed by an incomplete manifest.
- Branch CLI `index-refresh <ID,...> --role coordinator` supports 1–10 IDs, with a guarded bootstrap if older published metadata is absent.
- Before staging publish commit, branch workflow invokes scoped refresh and `index-check`.
- SQLite rebuild uses a staged derived database and does not delete a valid prior database first.

## QA status

Run `38374932374` completed **SUCCESS** on source commit `b1525b6758fdbe95936aa461d3aa05c2e5a16ddf`. In that same successful run, candidate manifest was generated, checked, then committed to this branch only.

| Gate | Result |
|---|---|
| Old partial-manifest detection | PASS |
| Focused unit / integration / negative / recovery tests | PASS |
| Coordinator index rebuild and check | PASS |
| Full engine and production invariant suite | PASS |
| Candidate JSONL staging restricted to feature branch | PASS |
| Production merge or deployment | **NOT AUTHORIZED / NOT DONE** |

A previous test run `38373914156` failed due to legacy cycle fixture treating slots without modules as PUBLISHED. Fixture was corrected without weakening the published ID gate, and the new run succeeded.

## Actual changed files (compared against `main`)

1. `.github/workflows/factory-publish.yml`: +11 / -0 — fail-closed refresh/check before batch commit.
2. `.github/workflows/p0-02-branch-qa.yml`: +94 / -0 — isolated QA; commits manifest candidate only on this feature branch.
3. `docs/P0-02-MANIFEST-COMPLETENESS.md`: +22 / -0 — repair design.
4. `factory/factory.js`: +17 / -4 — CLI and status output.
5. `factory/lib/content-index.js`: +118 / -18 — coverage guard, incremental refresh, atomic SQLite rebuild.
6. `factory/state/article-manifest.jsonl`: +754 / -10 — repaired candidate metadata, **NOT an article content rewrite**.
7. `factory/test-content-index-completeness.js`: +78 / -0 — focused regression tests.
8. `factory/test-cycle.js`: +13 / -7 — realistic test fixture for published slots.
9. `factory/test-reliability.js`: +3 / -0 — verifies CI gate placement.

**Zero changes to article modules, public HTML, URL/slug, title/H1/meta, canonical, redirects, noindex, sitemap, robots, schemas or production config on `main`.**

## Risks and release gates

1. **Concurrent Writer updates:** Re-read `main` at the moment of any *future separately approved* merge. If it advanced beyond `4abd3092`, reconcile published IDs and regenerate manifest against that NEW snapshot. Never force-push or overwrite live state.
2. **Bootstrap runtime:** A legacy incomplete manifest triggers one full source scan; subsequent batches are incremental by ID while SQLite is rebuilt from compact JSONL. Measure and constrain runtime if corpus reaches 20,000+ articles.
3. **Transaction safety:** Publish commit/push only after scoped refresh, strict completeness and index checks. Keep coordinator-only auth and no write path for Writer.
4. **Schema/content scope:** Metadata completeness PASS does not establish semantic uniqueness, search rankings, or content truthfulness; those are separate P0/P1 audits.
5. **GitHub Pages safety:** No URL or generated page changes are expected from this patch, but any approved rollout still requires post-deploy HTTP, sitemap, canonical and indexability QA.

## Rollback / recovery plan

**Before merge (current state):** simply leave the feature branch as is, or revert its seven commits on this branch. Production requires **no rollback** because it was never changed.

**Only after a future owner-approved production merge:**
1. If publish CI fails, stop further publish commits, preserve current Matrix and article modules, and capture failed job logs.
2. Revert the **new code/CI gates only** in a dedicated rollback commit when necessary; do not reset `main` to an old SHA, force-push, or restore a 322-row manifest over already-published IDs.
3. Preserve the latest complete PUBLISHED metadata. For derived `content-index.sqlite` (gitignored), have the coordinator rebuild from the verified manifest.
4. Rerun Matrix↔manifest↔sitemap equality, `index-check`, factory invariants and deploy smoke checks before resuming.
5. Request owner approval for any production rollback action.

## Final disposition

**P0-02 feature branch prepared and QA PASS.** Candidate manifest complete to this snapshot. **No merge, no deployment and no Writer activation.** Await separate, explicit owner approval for any production change.
