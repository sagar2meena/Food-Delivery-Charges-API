INSERT INTO items (id, type, description) VALUES (1, 'perishable', "pizza");
INSERT INTO items (id, type, description) VALUES (2, 'non-perishable', 'burger');
INSERT INTO items (id, type, description) VALUES (3, 'perishable', 'rice');
INSERT INTO items (id, type, description) VALUES (4, 'perishable', 'Dosa');
INSERT INTO items (id, type, description) VALUES (5, 'non-perishable', 'coldering');

INSERT INTO organizations (id, name) VALUES (1, 'amazon');
INSERT INTO organizations (id, name) VALUES (2, 'google');
INSERT INTO organizations (id, name) VALUES (3, 'flipkart');
INSERT INTO organizations (id, name) VALUES (4, 'viga');
INSERT INTO organizations (id, name) VALUES (5, 'infosys');


INSERT INTO pricing (id, organization_id, item_id, zone, base_distance_in_km,  km_price, fix_price) VALUES (1,1,1,'center',5,1.5,10);
INSERT INTO pricing (id, organization_id, item_id, zone, base_distance_in_km,  km_price, fix_price) VALUES (2,2,2,'center',5,1,10);
INSERT INTO pricing (id, organization_id, item_id, zone, base_distance_in_km,  km_price, fix_price) VALUES (3,3,3,'center',5,1.5,10);
INSERT INTO pricing (id, organization_id, item_id, zone, base_distance_in_km,  km_price, fix_price) VALUES (4,4,4,'center',5,1.5,10);
INSERT INTO pricing (id, organization_id, item_id, zone, base_distance_in_km,  km_price, fix_price) VALUES (5,5,5,'center',5,1,10);