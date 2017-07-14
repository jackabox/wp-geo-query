# WP Geo Query

Quick and easy class created to modify the WP_Query on specific calls and pull in all posts within a radius from a given latitude and longitude.

## Usage

This has predominently been built for dropping into a WordPress theme with as little customisation as possible. You'll need to include the Google Maps API (JavaScript library).

When a user fills in the `#autcomplete` field, they should be presented with an autocomplete (restricted to the UK), from there they can pick an option (it'll save Lat/Lng) and then post to the Loop.php
