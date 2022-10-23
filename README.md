# Poc.Monorepos.MvcProxy

This repository is a POC of a MVC proxy for angular aplications using the monorepos architecture implemented with bit.

# Trobleshooting
increase the Win32 path limit:

- Open Group Policy Editor (Press Windows+R and type gpedit.msc and hit Enter)
- From the Group Policy Editor window, navigate to the following node: Local Computer Policy\Computer Configuration\Administrative Templates\System\Filesystem
- Doubleclick on Enable Win32 long paths option and enable it.