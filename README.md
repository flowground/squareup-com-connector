# ![LOGO](logo.png) Square Connect **flow**ground Connector

## Description

A generated **flow**ground connector for the Square Connect API (version 2.0).

Generated from: https://api.apis.guru/v2/specs/squareup.com/2.0/swagger.json<br/>
Generated at: 2019-05-07T17:44:11+03:00

## API Description

Client library for accessing the Square Connect APIs

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Get a business's information.

*Tags:* `V1Locations`

### Provides summary information for all of a business's employees.

*Tags:* `V1Employees`

#### Input Parameters
* `order` - _optional_ - The order in which employees are listed in the response, based on their created_at field.      Default value: ASC 
    Possible values: ASC, DESC.
* `begin_updated_at` - _optional_ - If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
* `end_updated_at` - _optional_ - If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
* `begin_created_at` - _optional_ - If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
* `end_created_at` - _optional_ - If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
* `status` - _optional_ - If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
    Possible values: ACTIVE, INACTIVE.
* `external_id` - _optional_ - If provided, the endpoint returns only employee entities with the specified external_id.
* `limit` - _optional_ - The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Creates an employee for a business.

*Tags:* `V1Employees`

### Provides the details for a single employee.

*Tags:* `V1Employees`

#### Input Parameters
* `employee_id` - _required_ - The employee's ID.

### V1 UpdateEmployee

*Tags:* `V1Employees`

#### Input Parameters
* `employee_id` - _required_ - The ID of the role to modify.

### Provides details for a business's locations, including their IDs.

*Tags:* `V1Locations`

### Provides summary information for all of a business's employee roles.

*Tags:* `V1Employees`

#### Input Parameters
* `order` - _optional_ - The order in which employees are listed in the response, based on their created_at field.Default value: ASC 
    Possible values: ASC, DESC.
* `limit` - _optional_ - The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Creates an employee role you can then assign to employees.

*Tags:* `V1Employees`

### Provides the details for a single employee role.

*Tags:* `V1Employees`

#### Input Parameters
* `role_id` - _required_ - The role's ID.

### Modifies the details of an employee role.

*Tags:* `V1Employees`

#### Input Parameters
* `role_id` - _required_ - The ID of the role to modify.

### Provides summary information for all of a business's employee timecards.

*Tags:* `V1Employees`

#### Input Parameters
* `order` - _optional_ - The order in which timecards are listed in the response, based on their created_at field.
    Possible values: ASC, DESC.
* `employee_id` - _optional_ - If provided, the endpoint returns only timecards for the employee with the specified ID.
* `begin_clockin_time` - _optional_ - If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
* `end_clockin_time` - _optional_ - If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
* `begin_clockout_time` - _optional_ - If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
* `end_clockout_time` - _optional_ - If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
* `begin_updated_at` - _optional_ - If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
* `end_updated_at` - _optional_ - If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
* `deleted` - _optional_ - If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned.
* `limit` - _optional_ - The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Creates a timecard for an employee. Each timecard corresponds to a single shift.

*Tags:* `V1Employees`

### Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.

*Tags:* `V1Employees`

#### Input Parameters
* `timecard_id` - _required_ - The ID of the timecard to delete.

### Provides the details for a single timecard.

*Tags:* `V1Employees`

#### Input Parameters
* `timecard_id` - _required_ - The timecard's ID.

### Modifies a timecard's details. This creates an API_EDIT event for the timecard. You can view a timecard's event history with the List Timecard Events endpoint.

*Tags:* `V1Employees`

#### Input Parameters
* `timecard_id` - _required_ - TThe ID of the timecard to modify.

### Provides summary information for all events associated with a particular timecard.

*Tags:* `V1Employees`

#### Input Parameters
* `timecard_id` - _required_ - The ID of the timecard to list events for.

### Provides non-confidential details for all of a location's associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list bank accounts for.

### Provides non-confidential details for a merchant's associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the bank account's associated location.
* `bank_account_id` - _required_ - The bank account's Square-issued ID. You obtain this value from Settlement objects returned.

### Provides the details for all of a location's cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.

*Tags:* `V1Employees`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list cash drawer shifts for.
* `order` - _optional_ - The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC
    Possible values: ASC, DESC.
* `begin_time` - _optional_ - The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
* `end_time` - _optional_ - The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.

### Provides the details for a single cash drawer shift, including all events that occurred during the shift.

*Tags:* `V1Employees`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list cash drawer shifts for.
* `shift_id` - _required_ - The shift's ID.

### Lists all of a location's item categories.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list categories for.

### Creates an item category.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to create an item for.

### Deletes an existing item category.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `category_id` - _required_ - The ID of the category to delete.

### Modifies the details of an existing item category.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the category's associated location.
* `category_id` - _required_ - The ID of the category to edit.

### Lists all of a location's discounts.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list categories for.

### Creates a discount.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to create an item for.

### Deletes an existing discount.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `discount_id` - _required_ - The ID of the discount to delete.

### Modifies the details of an existing discount.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the category's associated location.
* `discount_id` - _required_ - The ID of the discount to edit.

### Lists all of a location's fees (taxes).

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list fees for.

### Creates a fee (tax).

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to create a fee for.

### Deletes an existing fee (tax).

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the fee's associated location.
* `fee_id` - _required_ - The ID of the fee to delete.

### Modifies the details of an existing fee (tax).

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the fee's associated location.
* `fee_id` - _required_ - The ID of the fee to edit.

### Provides inventory information for all of a merchant's inventory-enabled item variations.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `limit` - _optional_ - The maximum number of inventory entries to return in a single response. This value cannot exceed 1000.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Adjusts an item variation's current available inventory.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `variation_id` - _required_ - The ID of the variation to adjust inventory information for.

### Provides summary information for all of a location's items.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list items for.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Creates an item and at least one variation for it.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to create an item for.

### Deletes an existing item and all item variations associated with it.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `item_id` - _required_ - The ID of the item to modify.

### Provides the details for a single item, including associated modifier lists and fees.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `item_id` - _required_ - The item's ID.

### Modifies the core details of an existing item.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `item_id` - _required_ - The ID of the item to modify.

### Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the fee's associated location.
* `item_id` - _required_ - The ID of the item to add the fee to.
* `fee_id` - _required_ - The ID of the fee to apply.

### Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the fee's associated location.
* `item_id` - _required_ - The ID of the item to add the fee to.
* `fee_id` - _required_ - The ID of the fee to apply.

### Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to remove.
* `item_id` - _required_ - The ID of the item to remove the modifier list from.

### Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to apply.
* `item_id` - _required_ - The ID of the item to add the modifier list to.

### Creates an item variation for an existing item.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `item_id` - _required_ - The item's ID.

### Deletes an existing item variation from an item.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `item_id` - _required_ - The ID of the item to delete.
* `variation_id` - _required_ - The ID of the variation to delete.

### Modifies the details of an existing item variation.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `item_id` - _required_ - The ID of the item to modify.
* `variation_id` - _required_ - The ID of the variation to modify.

### Lists all of a location's modifier lists.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list modifier lists for.

### Creates an item modifier list and at least one modifier option for it.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to create a modifier list for.

### Deletes an existing item modifier list and all modifier options associated with it.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to delete.

### Provides the details for a single modifier list.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The modifier list's ID.

### Modifies the details of an existing item modifier list.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to edit.

### Creates an item modifier option and adds it to a modifier list.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to edit.

### Deletes an existing item modifier option from a modifier list.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to delete.
* `modifier_option_id` - _required_ - The ID of the modifier list to edit.

### Modifies the details of an existing item modifier option.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the item's associated location.
* `modifier_list_id` - _required_ - The ID of the modifier list to edit.
* `modifier_option_id` - _required_ - The ID of the modifier list to edit.

### Provides summary information for a merchant's online store orders.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list online store orders for.
* `order` - _optional_ - TThe order in which payments are listed in the response.
    Possible values: ASC, DESC.
* `limit` - _optional_ - The maximum number of payments to return in a single response. This value cannot exceed 200.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Provides comprehensive information for a single online store order, including the order's history.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the order's associated location.
* `order_id` - _required_ - The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint

### Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the order's associated location.
* `order_id` - _required_ - The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint

### Lists all of a location's Favorites pages in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list Favorites pages for.

### Creates a Favorites page in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to create an item for.

### Deletes an existing Favorites page and all of its cells.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the Favorites page's associated location.
* `page_id` - _required_ - The ID of the page to delete.

### Modifies the details of a Favorites page in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the Favorites page's associated location
* `page_id` - _required_ - The ID of the page to modify.

### Deletes a cell from a Favorites page in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the Favorites page's associated location.
* `page_id` - _required_ - The ID of the page to delete.
* `row` - _optional_ - The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row.
* `column` - _optional_ - The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column.

### Modifies a cell of a Favorites page in Square Register.

*Tags:* `V1Items`

#### Input Parameters
* `location_id` - _required_ - The ID of the Favorites page's associated location.
* `page_id` - _required_ - The ID of the page the cell belongs to.

### Provides summary information for all payments taken by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length. See Date ranges for details of inclusive and exclusive dates.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
* `order` - _optional_ - The order in which payments are listed in the response.
    Possible values: ASC, DESC.
* `begin_time` - _optional_ - The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
* `end_time` - _optional_ - The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
* `limit` - _optional_ - The maximum number of payments to return in a single response. This value cannot exceed 200.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Provides comprehensive information for a single payment.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the payment's associated location.
* `payment_id` - _required_ - The payment's Square-issued ID. You obtain this value from Payment objects returned by the List Payments endpoint, or Settlement objects returned by the List Settlements endpoint.

### Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list refunds for.
* `order` - _optional_ - TThe order in which payments are listed in the response.
    Possible values: ASC, DESC.
* `begin_time` - _optional_ - The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
* `end_time` - _optional_ - The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
* `limit` - _optional_ - The maximum number of payments to return in a single response. This value cannot exceed 200.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the original payment's associated location.

### Provides summary information for all deposits and withdrawals initiated by Square to a merchant's bank account during a date range. Date ranges cannot exceed one year in length.

> Provides summary information for all deposits and withdrawals initiated by Square to a merchant's bank account during a date range. Date ranges cannot exceed one year in length.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list settlements for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.
* `order` - _optional_ - TThe order in which payments are listed in the response.
    Possible values: ASC, DESC.
* `begin_time` - _optional_ - The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
* `end_time` - _optional_ - The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
* `limit` - _optional_ - The maximum number of payments to return in a single response. This value cannot exceed 200.
* `status` - _optional_ - Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
    Possible values: SENT, FAILED.
* `batch_token` - _optional_ - A pagination cursor to retrieve the next set of results for your
original query to the endpoint.

### Provides comprehensive information for a single settlement, including the entries that contribute to the settlement's total.

*Tags:* `V1Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the settlements's associated location.
* `settlement_id` - _required_ - The settlement's Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.

### BatchDeleteCatalogObjects

> Deletes a set of [CatalogItem](#type-catalogitem)s based on the<br/>
> provided list of target IDs and returns a set of successfully deleted IDs in<br/>
> the response. Deletion is a cascading event such that all children of the<br/>
> targeted object are also deleted. For example, deleting a CatalogItem will<br/>
> also delete all of its [CatalogItemVariation](#type-catalogitemvariation)<br/>
> children.<br/>
> <br/>
> `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted<br/>
> IDs can be deleted. The response will only include IDs that were<br/>
> actually deleted.

*Tags:* `Catalog`

### BatchRetrieveCatalogObjects

> Returns a set of objects based on the provided ID.<br/>
> Each [CatalogItem](#type-catalogitem) returned in the set includes all of its<br/>
> child information including: all of its<br/>
> [CatalogItemVariation](#type-catalogitemvariation) objects, references to<br/>
> its [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of<br/>
> any [CatalogTax](#type-catalogtax) objects that apply to it.

*Tags:* `Catalog`

### BatchUpsertCatalogObjects

> Creates or updates up to 10,000 target objects based on the provided<br/>
> list of objects. The target objects are grouped into batches and each batch is<br/>
> inserted/updated in an all-or-nothing manner. If an object within a batch is<br/>
> malformed in some way, or violates a database constraint, the entire batch<br/>
> containing that item will be disregarded. However, other batches in the same<br/>
> request may still succeed. Each batch may contain up to 1,000 objects, and<br/>
> batches will be processed in order as long as the total object count for the<br/>
> request (items, variations, modifier lists, discounts, and taxes) is no more<br/>
> than 10,000.

*Tags:* `Catalog`

### CatalogInfo

> Returns information about the Square Catalog API, such as batch size<br/>
> limits for `BatchUpsertCatalogObjects`.

*Tags:* `Catalog`

### ListCatalog

> Returns a list of [CatalogObject](#type-catalogobject)s that includes<br/>
> all objects of a set of desired types (for example, all [CatalogItem](#type-catalogitem)<br/>
> and [CatalogTax](#type-catalogtax) objects) in the catalog. The types parameter<br/>
> is specified as a comma-separated list of valid [CatalogObject](#type-catalogobject) types:<br/>
> `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`.

*Tags:* `Catalog`

#### Input Parameters
* `cursor` - _optional_ - The pagination cursor returned in the previous response. Leave unset for an initial request.
See [Paginating results](#paginatingresults) for more information.
* `types` - _optional_ - An optional case-insensitive, comma-separated list of object types to retrieve, for example
`ITEM,ITEM_VARIATION,CATEGORY`.

The legal values are taken from the [CatalogObjectType](#type-catalogobjecttype)
enumeration, namely `"ITEM"`, `"ITEM_VARIATION"`, `"CATEGORY"`, `"DISCOUNT"`, `"TAX"`,
`"MODIFIER"`, or `"MODIFIER_LIST"`.

### UpsertCatalogObject

> Creates or updates the target [CatalogObject](#type-catalogobject).

*Tags:* `Catalog`

### DeleteCatalogObject

> Deletes a single [CatalogObject](#type-catalogobject) based on the<br/>
> provided ID and returns the set of successfully deleted IDs in the response.<br/>
> Deletion is a cascading event such that all children of the targeted object<br/>
> are also deleted. For example, deleting a [CatalogItem](#type-catalogitem)<br/>
> will also delete all of its<br/>
> [CatalogItemVariation](#type-catalogitemvariation) children.

*Tags:* `Catalog`

#### Input Parameters
* `object_id` - _required_ - The ID of the [CatalogObject](#type-catalogobject) to be deleted. When an object is deleted, other
objects in the graph that depend on that object will be deleted as well (for example, deleting a
[CatalogItem](#type-catalogitem) will delete its [CatalogItemVariation](#type-catalogitemvariation)s).

### RetrieveCatalogObject

> Returns a single [CatalogItem](#type-catalogitem) as a<br/>
> [CatalogObject](#type-catalogobject) based on the provided ID. The returned<br/>
> object includes all of the relevant [CatalogItem](#type-catalogitem)<br/>
> information including: [CatalogItemVariation](#type-catalogitemvariation)<br/>
> children, references to its<br/>
> [CatalogModifierList](#type-catalogmodifierlist) objects, and the ids of<br/>
> any [CatalogTax](#type-catalogtax) objects that apply to it.

*Tags:* `Catalog`

#### Input Parameters
* `object_id` - _required_ - The object ID of any type of [CatalogObject](#type-catalogobject)s to be retrieved.
* `include_related_objects` - _optional_ - If `true`, the response will include additional objects that are related to the
requested object, as follows:

If the `object` field of the response contains a [CatalogItem](#type-catalogitem),
its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and
[CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the
response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation),
its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of
the response.

Default value: `false`

### SearchCatalogObjects

> Queries the targeted catalog using a variety of query types<br/>
> ([CatalogQuerySortedAttribute](#type-catalogquerysortedattribute),<br/>
> ([CatalogQueryExact](#type-catalogqueryexact),<br/>
> ([CatalogQueryRange](#type-catalogqueryrange),<br/>
> ([CatalogQueryText](#type-catalogquerytext),<br/>
> ([CatalogQueryItemsForTax](#type-catalogqueryitemsfortax),<br/>
> ([CatalogQueryItemsForModifierList](#type-catalogqueryitemsformodifierlist)).

*Tags:* `Catalog`

### UpdateItemModifierLists

> Updates the [CatalogModifierList](#type-catalogmodifierlist) objects<br/>
> that apply to the targeted [CatalogItem](#type-catalogitem) without having<br/>
> to perform an upsert on the entire item.

*Tags:* `Catalog`

### UpdateItemTaxes

> Updates the [CatalogTax](#type-catalogtax) objects that apply to the<br/>
> targeted [CatalogItem](#type-catalogitem) without having to perform an<br/>
> upsert on the entire item.

*Tags:* `Catalog`

### ListCustomers

> Lists a business's customers.

*Tags:* `Customers`

#### Input Parameters
* `cursor` - _optional_ - A pagination cursor returned by a previous call to this endpoint.
Provide this to retrieve the next set of results for your original query.

See [Paginating results](#paginatingresults) for more information.

### CreateCustomer

> Creates a new customer for a business, which can have associated cards on file.<br/>
> <br/>
> You must provide __at least one__ of the following values in your request to this<br/>
> endpoint:<br/>
> <br/>
> - `given_name`<br/>
> - `family_name`<br/>
> - `company_name`<br/>
> - `email_address`<br/>
> - `phone_number`<br/>
> <br/>
> This endpoint does not accept an idempotency key. If you accidentally create<br/>
> a duplicate customer, you can delete it with the<br/>
> [DeleteCustomer](#endpoint-deletecustomer) endpoint.

*Tags:* `Customers`

### DeleteCustomer

> Deletes a customer from a business, along with any linked cards on file.

*Tags:* `Customers`

#### Input Parameters
* `customer_id` - _required_ - The ID of the customer to delete.

### RetrieveCustomer

> Returns details for a single customer.

*Tags:* `Customers`

#### Input Parameters
* `customer_id` - _required_ - The ID of the customer to retrieve.

### UpdateCustomer

> Updates the details of an existing customer.<br/>
> The ID of the customer may change if the customer has been merged into another customer.<br/>
> <br/>
> You cannot edit a customer's cards on file with this endpoint. To make changes<br/>
> to a card on file, you must delete the existing card on file with the<br/>
> [DeleteCustomerCard](#endpoint-deletecustomercard) endpoint, then create a new one with the<br/>
> [CreateCustomerCard](#endpoint-createcustomercard) endpoint.

*Tags:* `Customers`

#### Input Parameters
* `customer_id` - _required_ - The ID of the customer to update.

### CreateCustomerCard

> Adds a card on file to an existing customer. In the United States<br/>
> Square takes care of automatically updating any cards on file that might<br/>
> have expired since you first attached them to a customer.

*Tags:* `Customers`

#### Input Parameters
* `customer_id` - _required_ - The ID of the customer to link the card on file to.

### DeleteCustomerCard

> Removes a card on file from a customer.

*Tags:* `Customers`

#### Input Parameters
* `customer_id` - _required_ - The ID of the customer that the card on file belongs to.
* `card_id` - _required_ - The ID of the card on file to delete.

### ListLocations

> Provides the details for all of a business's locations.<br/>
> <br/>
> Most other Connect API endpoints have a required `location_id` path parameter.<br/>
> The `id` field of the [`Location`](#type-location) objects returned by this<br/>
> endpoint correspond to that `location_id` parameter.

*Tags:* `Locations`

### CreateCheckout

> Creates a [Checkout](#type-checkout) response that links a<br/>
> `checkoutId` and `checkout_page_url` that customers can be directed to in<br/>
> order to provide their payment information using a payment processing<br/>
> workflow hosted on connect.squareup.com.

*Tags:* `Checkout`

#### Input Parameters
* `location_id` - _required_ - The ID of the business location to associate the checkout with.

### ListRefunds

> Lists refunds for one of a business's locations.<br/>
> <br/>
> Refunds with a `status` of `PENDING` are not currently included in this<br/>
> endpoint's response.<br/>
> <br/>
> Max results per [page](#paginatingresults): 50

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list refunds for.
* `begin_time` - _optional_ - The beginning of the requested reporting period, in RFC 3339 format.

See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.

Default value: The current time minus one year.
* `end_time` - _optional_ - The end of the requested reporting period, in RFC 3339 format.

See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.

Default value: The current time.
* `sort_order` - _optional_ - The order in which results are listed in the response (`ASC` for
oldest first, `DESC` for newest first).

Default value: `DESC`
    Possible values: DESC, ASC.
* `cursor` - _optional_ - A pagination cursor returned by a previous call to this endpoint.
Provide this to retrieve the next set of results for your original query.

See [Paginating results](#paginatingresults) for more information.

### ListTransactions

> Lists transactions for a particular location.<br/>
> <br/>
> Max results per [page](#paginatingresults): 50

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to list transactions for.
* `begin_time` - _optional_ - The beginning of the requested reporting period, in RFC 3339 format.

See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.

Default value: The current time minus one year.
* `end_time` - _optional_ - The end of the requested reporting period, in RFC 3339 format.

See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.

Default value: The current time.
* `sort_order` - _optional_ - The order in which results are listed in the response (`ASC` for
oldest first, `DESC` for newest first).

Default value: `DESC`
    Possible values: DESC, ASC.
* `cursor` - _optional_ - A pagination cursor returned by a previous call to this endpoint.
Provide this to retrieve the next set of results for your original query.

See [Paginating results](#paginatingresults) for more information.

### Charge

> Charges a card represented by a card nonce or a customer's card on file.<br/>
> <br/>
> Your request to this endpoint must include _either_:<br/>
> <br/>
> - A value for the `card_nonce` parameter (to charge a card nonce generated<br/>
> with the `SqPaymentForm`)<br/>
> - Values for the `customer_card_id` and `customer_id` parameters (to charge<br/>
> a customer's card on file)<br/>
> <br/>
> In order for an e-commerce payment to potentially qualify for<br/>
> [Square chargeback protection](https://squareup.com/help/article/5394), you<br/>
> _must_ provide values for the following parameters in your request:<br/>
> <br/>
> - `buyer_email_address`<br/>
> - At least one of `billing_address` or `shipping_address`<br/>
> <br/>
> When this response is returned, the amount of Square's processing fee might not yet be<br/>
> calculated. To obtain the processing fee, wait about ten seconds and call<br/>
> [RetrieveTransaction](#endpoint-retrievetransaction). See the `processing_fee_money`<br/>
> field of each [Tender included](#type-tender) in the transaction.

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the location to associate the created transaction with.

### RetrieveTransaction

> Retrieves details for a single transaction.

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the transaction's associated location.
* `transaction_id` - _required_ - The ID of the transaction to retrieve.

### CaptureTransaction

> Captures a transaction that was created with the [Charge](#endpoint-charge)<br/>
> endpoint with a `delay_capture` value of `true`.<br/>
> <br/>
> See [Delayed capture transactions](/articles/delayed-capture-transactions/)<br/>
> for more information.

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_
* `transaction_id` - _required_

### CreateRefund

> Initiates a refund for a previously charged tender.<br/>
> <br/>
> You must issue a refund within 120 days of the associated payment. See<br/>
> (this article)[https://squareup.com/help/us/en/article/5060] for more information<br/>
> on refund behavior.

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_ - The ID of the original transaction's associated location.
* `transaction_id` - _required_ - The ID of the original transaction that includes the tender to refund.

### VoidTransaction

> Cancels a transaction that was created with the [Charge](#endpoint-charge)<br/>
> endpoint with a `delay_capture` value of `true`.<br/>
> <br/>
> See [Delayed capture transactions](/articles/delayed-capture-transactions/)<br/>
> for more information.

*Tags:* `Transactions`

#### Input Parameters
* `location_id` - _required_
* `transaction_id` - _required_

## License

**flow**ground :- Telekom iPaaS / squareup-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
