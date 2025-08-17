# EquiTea at JBCA website

The EquiTea website is hosted here: https://www.jb.man.ac.uk/meetings/equitea/  <br>
This repository contains the html codes for the EquiTea at JBCA website and associated assets in the `assets` directory. 

Please open the `index_v2.html` file in any browser to view the website on your local system (please clone the entire repo for this).

# EquiTea website wiki

# Getting Started

The EquiTea website files are stored and updated here: https://github.com/EquiTea-at-JBCA/equitea_website.git

You’ll need access to the EquiTea organisation on Git Hub to access and edit this repo.

Here is a small glossary of the important files and folders in the repo:

1. `index.html`: Main HTML file for the website. Currently we only have one page so everything is here. This is the primary file you will need to edit unless you are adding/removing features, files, or formats. 
2. `styles_flex.css`: The CSS file that allows for flexible CSS design. We have settings for computers, tablets, and phones. 
3. `assets/` : this folder holds *all* the files, images etc hosted on the site. This involves member portraits, the background design, Code of Conduct, and other graphics we might have hosted on the website. 
    1. `color-palette.pdf`: PDF with the HEXcodes of the colours being used in the website template. 

To have a look around the website files, 

1. Clone the repo to your machine (assuming you have github installed):
    
    ```bash
    git clone [https://github.com/EquiTea-at-JBCA/equitea_website.git](https://github.com/EquiTea-at-JBCA/equitea_website.git)
    ```
    
2. Open the `index.html` file in any code/file editor to make changes. 
3. If you want to take a look at the offline, updated version of the website, open a browser, and open the `index.html` file in the browser. This is a great way to check how new changes are getting rendered.

# Maintenance

Regular maintenance is usually fairly simple. This involves updating the “upcoming events” section, archiving the last month’s event, and adding any resources that the speaker might have provided from the previous month. To do this, follow the “getting started” steps. Next, in the HTML file, locate the “upcoming events section” which looks like this:

```html
        <section id="upcoming-events">
            <h2>Upcoming Events</h2>
            <ul class="upcoming-events">
                <li><b>Title:</b> End of Year EquiTea Discussion <br>
                    <b>Date:</b>Thursday, 5 June 2025 <br>
                    <b>Time:</b> 11:00 - 12:00 <br>
                    <b>Host: </b> Alec Csukai, PhD student, Jodrell Bank of Astrophysics, University of Manchester <br>
                    <b>Description:</b> Our final EquiTea session of the semester will be dedicated to revisiting some of the topics and discussions that we have had through our current course of talks. This session will be led by Lily Magnus who will give a recap of the talks (Laura Wolz, carers in STEMM; Laura Howard, lived experiences of disability; Louise Carvalho, invisible diversity dimensions) and who will lead an open discussion. Participants are also welcome to bring up topics beyond these talks - all inputs are welcome.
                </li>
            </ul>
        </section>
```

First, copy the details of this event to the “event archive” section which looks like this: 

```html
<div class="panel" tabindex="0">
                    <h3>&#8226 End of Year EquiTea Discussion </h3>
                        <p class="tx-ind"><b><i>Date and Time: </i></b>11:00 - 12:00, Thursday, 5 June 2025 </p>
                        <p class="tx-ind"><b><i>Host: </i></b> Alec Csukai, PhD student, Jodrell Bank of Astrophysics, University of Manchester</p>
                        <p class="tx-ind"><b><i>Description: </i></b> 
                        Our final EquiTea session of the semester will be dedicated to revisiting some of the topics and discussions that we have had through our current course of talks. This session will be led by Lily Magnus who will give a recap of the talks (Laura Wolz, carers in STEMM; Laura Howard, lived experiences of disability; Louise Carvalho, invisible diversity dimensions) and who will lead an open discussion. Participants are also welcome to bring up topics beyond these talks - all inputs are welcome.                    
                    </p>
```

The idea is to add the past event to the list of our past events. Just follow the template, and copy the information. Next, go back to the “upcoming events” section, and following the templates, copy the details of the new events. 

Once this is done, save the file, and push the changes to the repo (here are the commands for reference)

From within the local git folder:

```bash
git add .
git commit -m "commit message"
git push -u origin main
```

Now we need to push these changes *online* to our website. To do this, ssh in to our external server:

```bash
ssh -y sdutta@external.jb.man.ac.uk
```

Then, navigate to this location from your home:

```bash
cd /home/www/public_html/meetings/equitea
```

This is where the website is hosted from. The git repo `equitea_website` is situated separately within this directory to avoid website crashes due to buggy versions under development. Now, to make sure our new changes are implemented online, navigate to 

```bash
cd equitea_website
```

Then pull the changes from remote:

```bash
git pull
```

Now navigate back to /`home/www/public_html/meetings/equitea` and copy the files you have changed from `equitea_website`. Usually it will just be the index file, so 

```bash
cp equitea_website/index.html .
```

This will automatically update the website online. If you have added/changed any file within `assets/`, you’ll need to copy the changed files from `equitea_website/assets` to `assets/` within `/home/www/public_html/meetings/equitea`.
