Glitch on Dev.to
=================

This is a guide for writing blog posts for the [Glitch org on Dev.to](https://dev.to/glitch/). Testing. 

## Content on Dev.to
Basic standards:
- short (150-750 words)
- for a developer audience
- mention Glitch

Some potential topics include<sub>1</sub>:
- tutorials
- introductory articles
- roundups
- observations/trends
- editorials
- lessons learned
- annoucements/new features

Ideas<sub>1</sub>: 
- Have you ever found a workaround for a common barrier or issue in a piece of open-source software you use? 
- How do you use Glitch?
- New Glitch features
- If you had to make a choice about a tool or framework recently, how did you decide?

## Writing your post

### Outline
If you already have a process that works for you, go for it! Otherwise I strongly recommend writing a post outline and submitting it to #editorial for review

### Drafting
You're welcome to use whatever tools work for you. I strongly recommend using a tool like [Hemingway](http://www.hemingwayapp.com/) or [Vale](https://errata.ai/vale-server/), which can catch basic errors. See the Appendix for a helpful Writing checklist.

Submit drafts as Markdown via pull request at 🔒[devto-posts](https://github.com/glitchdotcom/devto-posts). For example my post about Testing I would create a new file called test.md, add my post draft, and create a branch. Then submit a pull request for that branch to master. The [Pull Request template](https://github.com/glitchdotcom/devto-posts/blob/master/.github/PULL_REQUEST_TEMPLATE.md) has a checklist for the rest of the process.

At this point don't worry about embeds, pictures or any other formatting.

### Automated feedback
When you submit a pull request on 🔒[devto-posts](https://github.com/glitchdotcom/devto-posts) you'll get some automated checks via GitHub Actions. You can see the results in the "checks" area of the Pull Request.  Currently [Link Checker](https://github.com/marketplace/actions/link-checker) visits the links in your post to make sure they work. 

### Adding images/embeds and sharing with #editorial
At this stage, put your post into Dev.to in the Glitch org (see appendix) and add any formatting, images, and code blocks you'd like. Dev.to will give you a helpful draft link which you should share to the #editorial channel on Slack.

Make sure what's in Dev.to is synced with the Markdown file in the PR. 


## Editing a post
If you're asked to review a post, we recommend doing the "review" option on the GitHub pull request. Simple copy edits (spelling, grammar) can be done as simple edits to the MarkDown file. Larger feedback can be done as comments. For a helpful resource for editing posts see the "Writing checklist" in the Appendix. 

## Appendix
### Code Review
Most Dev.to posts involve code in the form of:
- Embedded Glitch apps
- Code snippets in Markdown 

We do not have a strict code review process or standards, but we like to see:
- well-commented code
- a README.md in all Glitch apps
- files named in a way that will make sense I.E. "feedparser.js" rather than "file1.js"
- a license (MIT for now, more info TBD)

### Joining the Dev.to Glitch org 
To add posts to the Glitch org on Dev.to you'll need to join it. Sign up for the Dev.to account if you don't have one and DM Melissa on Slack to join. 

### Writing checklist
- Introduction
  - a clear "what's this post about" sentence that tells the reader what they'll learn if they read on. 
  - a link to Glitch
  - keep it short!
- Subheaders (H2s)
  - if it's a tutorial, these should be the steps, otherwise these should be the main points
  - first sentence under subhead should introduce the section
  - we love links, make sure to link whenever possible
  - no sub subheads (like h3s, h4s)
- Conclusion
 - A CTA (call to action) sentence like "remix this and tweet us what you made"
 - Glitch boilerplate (see section in appendix)

 
 ### Glitch boilerplate
 
```
_[Give your Glitch apps superpowers - keep them awake, lift rate limits, and get more memory and disk space.](https://glitch.com/pricing?utm_medium=weblink&utm_source=dev.to&utm_campaign=handbook&utm_content=dev)_
```

----
Credits:
<sub>1</sub>: [The Developer's Guide
to Content Creation](https://www.developersguidetocontent.com/)


----
### made on [glitch](http://glitch.com)

ヽ༼ຈل͜ຈ༽ﾉ
