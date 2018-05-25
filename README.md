Based on the [Workbox Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users) (with a significnat enhancement.)

To test:

```
npm install
npm run start
```

Then open http://localhost:8000 in a browser tab. You should just see the number 0.

Edit index.html to replace the "0" in the body tag on line 2 with a "1", and edit index.html to change the first line `v` variable from "0" to "1". Back in your browser, refresh the page.

After refreshing, you should still see a 0 in the tab, but you should also see a button at the bottom left corner. When you either click the button or refresh the page, you should see a 1 in the tab.

If you open multiple tabs pointing to http://localhost:8000, clicking the button will refresh all tabs, but refreshing any one tab won't update the number or refresh other tabs.