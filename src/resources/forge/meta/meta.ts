/**
 * Forge's Metadata is not provided in their website or repo because ads are the major source of income for the project
 * Support the project's major developer LexManos in patreon : https://www.patreon.com/LexManos
 * You can download forge with the adfocus links in their wwbsite
 *
 * So This Program will scan their website and get forge's Manifest data
 * First it will get supported minecraft versions with this regex
 *      /<a.{0,}href=\"index_\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?\.html\">(\d{0,1}\.\d{0,2}\.?\d{0,2})<\/a>|<li class=\"elem-active\">(\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?)<\/li>/gi
 *
 * Then Request All the Index Webpages
 *      index_<:version>.html
 *
 * Then get the maven repo with this regex
 *      /https?:\/\/maven\.minecraftforge\.net\/net\/minecraftforge\/forge\/(\d\.\d{0,2}\.?\d{0,2}\w{0,})-(\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,})\/forge-\d\.\d{0,2}\.?\d{0,2}\w{0,}\d{0,}-\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,}-?\w{0,}\.(zip|jar)/gi
 * (The Longest Regex we've ever made...)
 * (It nearly caused a Catastrophic Backtracking when I test it on my own computer.)
 *
 *
 */

const ForgeGameVersionRegex: RegExp =
  /<a.{0,}href=\"index_\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?\.html\">(\d{0,1}\.\d{0,2}\.?\d{0,2})<\/a>|<li class=\"elem-active\">(\d{0,1}\.\d{0,2}\.?\d{0,2}_?p?r?e?\d?)<\/li>/gi;
const ForgeMavenRepoRegex: RegExp =
  /https?:\/\/maven\.minecraftforge\.net\/net\/minecraftforge\/forge\/(\d\.\d{0,2}\.?\d{0,2}\w{0,})-(\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,})\/forge-\d\.\d{0,2}\.?\d{0,2}\w{0,}\d{0,}-\d{0,}\.\d{0,}\.\d{0,}\.?\d{0,}-?\w{0,}-?\w{0,}\.(zip|jar)/gi;

export function getForgeInstallerMetadata() {
  axios.get();
}
