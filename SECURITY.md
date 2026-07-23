# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it
privately so it can be addressed before public disclosure.

- **Email:** arslan.anwer778@gmail.com
- Alternatively, open a [GitHub Security Advisory](https://github.com/chshani786/My-Portfolio/security/advisories/new)
  (preferred — keeps the report private until a fix is ready).

Please include:

- A description of the vulnerability and its potential impact
- Steps to reproduce (proof of concept if possible)
- The affected file(s), route(s), or dependency

**Please do not open a public issue for security reports.**

## Response Expectations

- Acknowledgement within **3 business days**
- A remediation plan or fix timeline after triage
- Credit in the release notes once resolved, if you'd like

## Scope

This is a static, client-side portfolio site. Note that the EmailJS
credentials (`VITE_EMAILJS_*`) are **public by design** — they are meant to be
exposed in the browser bundle. Abuse is mitigated via EmailJS dashboard
controls (domain allow-list and reCAPTCHA), not by keeping these values secret.

## Supported Versions

Only the latest version on the `main` branch is maintained.
