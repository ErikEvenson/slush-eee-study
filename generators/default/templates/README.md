# Project

This is a MEAN stack project generated with slush-eee-study.  The stack used is documented at [docs/technology_stack.md](docs/technology_stack.md).

## Prerequisites

TBD:

- node
- mongodb

Add node globals.  Reflect any updates to these modules in the technology stack document.

```bash
sudo npm -g install gulp@3.8.10
sudo npm -g install bower@1.3.12
sudo npm -g install karma-cli@0.0.4 mocha@2.1.0
```

When done, exit the virtual environment and `vagrant halt` to stop the virtual machine.  Use `vagrant destroy` to reclaim the disk space (although this will require you to re-provision the machine again later).  `vagrant remove` should be used to remove the base box from the system as well.  `vagrant up` and `vagrant ssh web` to start another development session later.  Avoid using `--no-provision` as this seems to prevent `vagrant-cachier` from working correctly.
