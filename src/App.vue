<template>
  <div id="app">

    <full-page :options="options" id="fullpage">

      <div class="section">
        <home/>
      </div>


      <div class="section">
        <div class="slide">
          <project image="project"/>
        </div>

        <div id ="mobile" class="slide">
          <project-details name="Space Evasion"/>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <project image="project"/>
        </div>

        <div id="mobile" class="slide">
          <h3>Slide 2.2</h3>
        </div>

      </div>
    </full-page>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Project from "./components/Project.vue";
import ProjectDetails from  "./components/ProjectDetails.vue"

export default {
  name: "app",
  components: {
    Home,
    Project,
    ProjectDetails
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: false,
        scrollBar: false,
        scrollHorizontally: true,
        controlArrows: false,
        menu: "#menu",
        navigation: false,
        anchors: ["", "projectOne", "projectTwo"],
        sectionsColor: [
          "#990000",
          "#990000",
          "#990000",
          "#fec401",
          "#2c3e4f",
          "#1bcee6",
          "#ee1a59",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    };
  },
  methods: {
    afterLoad() {
      // eslint-disable-next-line
      console.log("After load");
    },

    addSection(e) {
      e.preventDefault();
      var newSectionNumber =
        document.querySelectorAll(".fp-section").length + 1;

      // creating the section div
      var section = document.createElement("div");
      section.className = "section";
      section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`;

      // adding section
      document.querySelector("#fullpage").appendChild(section);

      // creating the section menu element
      var sectionMenuItem = document.createElement("li");
      sectionMenuItem.setAttribute(
        "data-menuanchor",
        "page" + newSectionNumber
      );
      sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`;

      // adding it to the sections menu
      var sectionsMenuItems = document.querySelector("#menu");
      sectionsMenuItems.appendChild(sectionMenuItem);

      // adding anchor for the section
      this.options.anchors.push(`page${newSectionNumber}`);

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build();
    },
    removeSection() {
      var sections = document
        .querySelector("#fullpage")
        .querySelectorAll(".fp-section");
      var lastSection = sections[sections.length - 1];

      // removing the last section
      lastSection.parentNode.removeChild(lastSection);

      // removing the last anchor
      this.options.anchors.pop();

      // removing the last item on the sections menu
      var sectionsMenuItems = document.querySelectorAll("#menu li");
      var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1];
      lastItem.parentNode.removeChild(lastItem);
    },
    toggleNavigation() {
      this.options.navigation = !this.options.navigation;
    },
    toggleScrollbar() {
      // eslint-disable-next-line
      console.log("Changing scrollbar...");
      this.options.scrollBar = !this.options.scrollBar;
    }
  }
};
</script>

<style>
.button {
  display:flex;
  position:absolute;
  z-index: 10;
  padding-left:93vw;
}
full-page{
  z-index: 10;
}
.button-hidden{
visibility: hidden;}
@media screen and (min-width: 900px){
    
    .button{
    display:none;
    }
#mobile {
  display:none!important;
}
}

</style>
