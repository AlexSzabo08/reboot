const Reboot = artifacts.require("Reboot")
const Profile = artifacts.require("Profile")

module.exports = function(deployer) {
  deployer.deploy(Reboot)
  deployer.deploy(Profile)
}