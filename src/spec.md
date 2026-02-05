# Specification

## Summary
**Goal:** Populate the portfolio/resume site with real resume content from the uploaded screenshot and display full contact details including phone number.

**Planned changes:**
- Extract the resume details from `Screenshot 2026-02-05 150324.png` and replace all placeholder content in `frontend/src/resumeData.ts` with Fatima Chowdhury’s information (Detroit, MI; chowdhuryz313@gmail.com; education, experience, skills).
- Add a phone number field to the resume data model and render it alongside existing contact info, while hiding it when not provided.
- Update UI section rendering to conditionally hide empty/unused sections (e.g., Projects, social/contact links blocks) and remove their navigation links when hidden.

**User-visible outcome:** The site displays Fatima Chowdhury’s resume (education, experience highlights, and skills) with email and phone number shown in contact info, and no empty sections or navigation links appear for missing resume content.
