const Reboot = artifacts.require("Reboot")
const Profile = artifacts.require("Profile")
const Post = artifacts.require("Post")

module.exports = function(deployer) {
  deployer.deploy(Reboot)
  deployer.deploy(Profile)
  deployer.deploy(Post)
}