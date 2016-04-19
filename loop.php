$locations = new WP_Query_Geo([
    'post_status' => 'publish',
    'post_type' => 'ash_locations', // cpt with locations stored
    'posts_per_page' => -1,
    'lat' => $lat, // pass in latitude 
    'lng' =>  $lng, // pass in longitude
    'distance' => 10 // distance to find properties in
]);