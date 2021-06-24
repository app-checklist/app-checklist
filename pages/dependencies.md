import CheckList from '../components/CheckList'
import Checkbox from '../components/Checkbox'

# Dependencies

It's important to keep your dependencies up to date. Current dependencies makes it easier to do maintenance. There are a couple solutions which make it really easy to keep them up to date. For example [Dependabot](https://dependabot.com/) or [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate).

Another point to keep in mind, is that your app depends on a specific OS version. You should keep an eye on this, too. Google even requires you to have a current target OS version.

<CheckList>
    <Checkbox title="Have processes in place to keep dependencies up to date" cb_id="dependencies"/>
    <Checkbox title="Have processes in place to verify you app against new OS updates" cb_id="os_updates"/>
    <Checkbox title="Have processes in place to target always the most recent OS version" cb_id="target_os_updates"/>
</CheckList>