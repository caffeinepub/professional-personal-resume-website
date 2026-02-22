# Specification

## Summary
**Goal:** Fix draft-domain redirect behavior so the site consistently uses fatimachowdhury.com when it is reachable, without getting stuck due to a previously cached “unreachable” result.

**Planned changes:**
- Update redirect logic in `frontend/index.html` to re-check canonical domain reachability on subsequent loads (or after a reasonable time) so a stale cached `canonicalDomainReachable=false` does not block redirect indefinitely.
- Ensure that when `fatimachowdhury.com` is reachable, visiting the Caffeine draft domain navigates to `https://fatimachowdhury.com/` (address bar reflects the canonical domain).
- Ensure that when `fatimachowdhury.com` is not reachable/configured, the site stays accessible on the draft domain without redirect loops or blank-page failures.
- Strip any `#caffeineAdminToken=...` fragment from the URL (during redirect or via history replace when remaining on the draft domain).

**User-visible outcome:** Opening the site on the Caffeine draft domain redirects to fatimachowdhury.com whenever it’s reachable, and the page remains usable on the draft domain when it isn’t; any `#caffeineAdminToken=...` fragment is removed from the address bar.
