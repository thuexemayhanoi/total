# AI CONTENT COLLISION GUARD — Proposed specification, no changes to writer

Current: factory/lib/topic-gate.js already compares normalized titles, intent clusters, focus text and neighbors. topic-governance.json has mode=enforce, v1Generation=frozen, requireApproved=true.

## Gate
TOPIC → NORMALIZE → FETCH all PUBLISHED+PLANNED+TOPIC_V2+WRITER_QUEUE → INTENT CHECK → USER TASK & BODY COMPARISON → UNIQUE GAIN / FACT CHECK → DECISION → OWNER APPROVE → WRITER PACK → VERIFY RECHECK.

## Outcomes
- ALLOW_CREATE: genuine independent user problem, verifiable sources, no existing URL adequately answers; still needs owner approval.
- UPGRADE_EXISTING: one existing URL is appropriate; only revise content after owner approval, preserve URL.
- REVIEW_COLLISION: unclear overlap, stale corpus/index, no full body, conflicting intent or missing evidence; fail closed.
- REJECT_DUPLICATE: no unique value; reject NEW topic only, never remove published URL.

## Inputs / evidence
- All published modules and Matrix IDs (1010), queued V2 (10) and frozen V1 plans (300) for awareness, and topic matrix.
- Explicit entity/user question/answer intent; different phrasing or local modifier is not automatically different.
- H1/H2/answer/FAQ/content, not a single cosine threshold. Distinguish rental vs technical model reference vs repair instructions.
- Exact primaryIntent matches flagged at snapshot: 3 groups, 6 PUBLISHED URLs.
- article-manifest.jsonl has 322 records, so NEVER use it alone as the corpus; 688 published IDs are missing there.
- GSC query→page evidence only once connected to this specific Wiki subdomain; absent metrics must remain absent.

## Safe implementation proposal on independent feature branch only
1. Validate corpus completeness vs Matrix/modules/sitemap and source commit SHA.
2. Extend existing topic-gate before topic-approve and again at writer-pack/verify-batch; no parallel truth database.
3. Record {candidateId, sourceHead, closePublishedIds, queuedIds, intent, entities, userTask, evidence, disposition, reviewer}.
4. Use article-hash keyed incremental update to the derived index; missing index causes REVIEW not ALLOW.
5. QA both positive collisions (paraphrases, location swaps, duplicate queue) and negative neighbors (Honda model technical vs Honda rental).
6. Do not merge to main or launch Writer until the owner explicitly approves scope.
