# <p align="center" width="100%"> <img src="./logo.png" width="250" height="250"> </p> 
# <p align="center" width="100%"> Asana OIH Connector </p>

## Description

A generated OIH connector for the Asana API (version 1.0).

Generated from: https://app.asana.com/api/1.0<br/>
Generated at: 2021-10-15T09:02:00+02:00

## API Description

This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).<br/>

## Authorization

Supported authorization schemes:
- Bearer Token - A personal access token allows access to the api for the user who created it. This should be kept a secret and be treated like a password.
- OAuth2 - We require that applications designed to access the Asana API on behalf of multiple users implement OAuth 2.0.
Asana supports the Authorization Code Grant flow.

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Get an attachment
> Get the full record for a single attachment.<br/>

*Tags:* `Attachments`

#### Input Parameters
* `attachment_gid` - _required_ - Globally unique identifier for the attachment.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete an attachment
> Deletes a specific, existing attachment.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Attachments`

#### Input Parameters
* `attachment_gid` - _required_ - Globally unique identifier for the attachment.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Upload an attachment
> Upload an attachment.<br/>
> <br/>
> This method uploads an attachment to a task and returns the compact<br/>
> record for the created attachment object. It is not possible to attach<br/>
> files from third party services such as Dropbox, Box & Google Drive via<br/>
> the API. You must download the file content first and then upload it as<br/>
> any other attachment.<br/>
> <br/>
> The 100MB size limit on attachments in Asana is enforced on this endpoint.<br/>
> <br/>
> This endpoint expects a multipart/form-data encoded request containing<br/>
> the full contents of the file to be uploaded.<br/>
> <br/>
> Requests made should follow the HTTP/1.1 specification that line<br/>
> terminators are of the form `CRLF` or `\r\n` outlined<br/>
> [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules)<br/>
> in order for the server to reliably and properly handle the request.<br/>

*Tags:* `Attachments`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Submit parallel requests
> Make multiple requests in parallel to Asana's API.<br/>

*Tags:* `Batch API`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a custom field
> Creates a new custom field in a workspace. Every custom field is required<br/>
> to be created in a specific workspace, and this workspace cannot be<br/>
> changed once set.<br/>
> <br/>
> A custom field's name must be unique within a workspace and not conflict<br/>
> with names of existing task properties such as 'Due Date' or 'Assignee'.<br/>
> A custom field's type must be one of 'text', 'enum', or 'number'.<br/>
> <br/>
> Returns the full record of the newly created custom field.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Get a custom field
> Get the complete definition of a custom field's metadata.<br/>
> <br/>
> Since custom fields can be defined for one of a number of types, and<br/>
> these types have different data and behaviors, there are fields that are<br/>
> relevant to a particular type. For instance, as noted above, enum_options<br/>
> is only relevant for the enum type and defines the set of choices that<br/>
> the enum could represent. The examples below show some of these<br/>
> type-specific custom field definitions.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `custom_field_gid` - _required_ - Globally unique identifier for the custom field.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a custom field
> A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged<br/>
> When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.<br/>
> A custom field's `type` cannot be updated.<br/>
> An enum custom field's `enum_options` cannot be updated with this endpoint. Instead see "Work With Enum Options" for information on how to update `enum_options`.<br/>
> Locked custom fields can only be updated by the user who locked the field.<br/>
> Returns the complete updated custom field record.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `custom_field_gid` - _required_ - Globally unique identifier for the custom field.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a custom field
> A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.<br/>
> Locked custom fields can only be deleted by the user who locked the field.<br/>
> Returns an empty data record.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `custom_field_gid` - _required_ - Globally unique identifier for the custom field.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create an enum option
> Creates an enum option and adds it to this custom field's list of enum options. A custom field can have at most 50 enum options (including disabled options). By default new enum options are inserted at the end of a custom field's list.<br/>
> Locked custom fields can only have enum options added by the user who locked the field.<br/>
> Returns the full record of the newly created enum option.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `custom_field_gid` - _required_ - Globally unique identifier for the custom field.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Reorder a custom field's enum
> Moves a particular enum option to be either before or after another specified enum option in the custom field.<br/>
> Locked custom fields can only be reordered by the user who locked the field.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `custom_field_gid` - _required_ - Globally unique identifier for the custom field.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update an enum option
> Updates an existing enum option. Enum custom fields require at least one enabled enum option.<br/>
> Locked custom fields can only be updated by the user who locked the field.<br/>
> Returns the full record of the updated enum option.<br/>

*Tags:* `Custom Fields`

#### Input Parameters
* `enum_option_gid` - _required_ - Globally unique identifier for the enum option.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a job by id
> Returns the full record for a job.<br/>

*Tags:* `Jobs`

#### Input Parameters
* `job_gid` - _required_ - Globally unique identifier for the job.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create an organization export request
> This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.<br/>

*Tags:* `Organization Exports`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Get details on an org export request
> Returns details of a previously-requested Organization export.<br/>

*Tags:* `Organization Exports`

#### Input Parameters
* `organization_export_gid` - _required_ - Globally unique identifier for the organization export.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a portfolio membership
> Returns the complete portfolio record for a single portfolio membership.<br/>

*Tags:* `Portfolio Memberships`

#### Input Parameters
* `portfolio_membership_gid` - _required_
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a portfolio
> Creates a new portfolio in the given workspace with the supplied name.<br/>
> <br/>
> Note that portfolios created in the Asana UI may have some state<br/>
> (like the "Priority" custom field) which is automatically added<br/>
> to the portfolio when it is created. Portfolios created via our<br/>
> API will *not* be created with the same initial state to allow<br/>
> integrations to create their own starting state on a portfolio.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a portfolio
> Returns the complete portfolio record for a single portfolio.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a portfolio
> An existing portfolio can be updated by making a PUT request on the URL for<br/>
> that portfolio. Only the fields provided in the `data` block will be updated;<br/>
> any unspecified fields will remain unchanged.<br/>
> <br/>
> Returns the complete updated portfolio record.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a portfolio
> An existing portfolio can be deleted by making a DELETE request on<br/>
> the URL for that portfolio.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add a portfolio item
> Add an item to a portfolio.<br/>
> Returns an empty data block.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove a portfolio item
> Remove an item from a portfolio.<br/>
> Returns an empty data block.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add a custom field to a portfolio
> Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>

### Remove a custom field from a portfolio
> Removes a custom field setting from a portfolio.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>

### Add users to a portfolio
> Adds the specified list of users as members of the portfolio.<br/>
> Returns the updated portfolio record.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove users from a portfolio
> Removes the specified list of users from members of the portfolio.<br/>
> Returns the updated portfolio record.<br/>

*Tags:* `Portfolios`

#### Input Parameters
* `portfolio_gid` - _required_ - Globally unique identifier for the portfolio.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a project membership
> Returns the complete project record for a single project membership.<br/>

*Tags:* `Project Memberships`

#### Input Parameters
* `project_membership_gid` - _required_
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a project status
> Returns the complete record for a single status update.<br/>

*Tags:* `Project Statuses`

#### Input Parameters
* `project_status_gid` - _required_ - The project status update to get.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a project status
> Deletes a specific, existing project status update.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Project Statuses`

#### Input Parameters
* `project_status_gid` - _required_ - The project status update to get.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a project status
> Creates a new status update on the project.<br/>
> Returns the full record of the newly created project status update.<br/>

*Tags:* `Project Statuses`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a project
> Create a new project in a workspace or team.<br/>
> <br/>
> Every project is required to be created in a specific workspace or<br/>
> organization, and this cannot be changed once set. Note that you can use<br/>
> the `workspace` parameter regardless of whether or not it is an<br/>
> organization.<br/>
> <br/>
> If the workspace for your project is an organization, you must also<br/>
> supply a `team` to share the project with.<br/>
> <br/>
> Returns the full record of the newly created project.<br/>

*Tags:* `Projects`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a project
> Returns the complete project record for a single project.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a project
> A specific, existing project can be updated by making a PUT request on<br/>
> the URL for that project. Only the fields provided in the `data` block<br/>
> will be updated; any unspecified fields will remain unchanged.<br/>
> <br/>
> When using this method, it is best to specify only those fields you wish<br/>
> to change, or else you may overwrite changes made by another user since<br/>
> you last retrieved the task.<br/>
> <br/>
> Returns the complete updated project record.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a project
> A specific, existing project can be deleted by making a DELETE request on<br/>
> the URL for that project.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Duplicate a project
> Creates and returns a job that will asynchronously handle the duplication.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a project in a team
> Creates a project shared with the given team.<br/>
> <br/>
> Returns the full record of the newly created project.<br/>

*Tags:* `Projects`

#### Input Parameters
* `team_gid` - _required_ - Globally unique identifier for the team.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a project in a workspace
> Returns the compact project records for all projects in the workspace.<br/>
> <br/>
> If the workspace for your project is an organization, you must also<br/>
> supply a team to share the project with.<br/>
> <br/>
> Returns the full record of the newly created project.<br/>

*Tags:* `Projects`

#### Input Parameters
* `workspace_gid` - _required_ - Globally unique identifier for the workspace or organization.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add a custom field to a project
> Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>

### Remove a custom field from a project
> Removes a custom field setting from a project.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>

### Add users to a project
> Adds the specified list of users as members of the project.<br/>
> Returns the updated project record.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove users from a project
> Removes the specified list of users from members of the project.<br/>
> Returns the updated project record.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add followers to a project
> Adds the specified list of users as followers to the project. Followers are a subset of members, therefore if the users are not already members of the project they will also become members as a result of this operation.<br/>
> Returns the updated project record.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove followers from a project
> Removes the specified list of users from following the project, this will not affect project membership status.<br/>
> Returns the updated project record.<br/>

*Tags:* `Projects`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a section
> Returns the complete record for a single section.<br/>

*Tags:* `Sections`

#### Input Parameters
* `section_gid` - _required_ - The globally unique identifier for the section.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a section
> A specific, existing section can be updated by making a PUT request on<br/>
> the URL for that project. Only the fields provided in the `data` block<br/>
> will be updated; any unspecified fields will remain unchanged. (note that<br/>
> at this time, the only field that can be updated is the `name` field.)<br/>
> <br/>
> When using this method, it is best to specify only those fields you wish<br/>
> to change, or else you may overwrite changes made by another user since<br/>
> you last retrieved the task.<br/>
> <br/>
> Returns the complete updated section record.<br/>

*Tags:* `Sections`

#### Input Parameters
* `section_gid` - _required_ - The globally unique identifier for the section.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a section
> A specific, existing section can be deleted by making a DELETE request on<br/>
> the URL for that section.<br/>
> <br/>
> Note that sections must be empty to be deleted.<br/>
> <br/>
> The last remaining section cannot be deleted.<br/>
> <br/>
> Returns an empty data block.<br/>

*Tags:* `Sections`

#### Input Parameters
* `section_gid` - _required_ - The globally unique identifier for the section.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a section in a project
> Creates a new section in a project.<br/>
> Returns the full record of the newly created section.<br/>

*Tags:* `Sections`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add task to section
> Add a task to a specific, existing section. This will remove the task from other sections of the project.<br/>
> <br/>
> The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.<br/>
> <br/>
> This does not work for separators (tasks with the resource_subtype of section).<br/>

*Tags:* `Sections`

#### Input Parameters
* `section_gid` - _required_ - The globally unique identifier for the section.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Move or Insert sections
> Move sections relative to each other. One of<br/>
> `before_section` or `after_section` is required.<br/>
> <br/>
> Sections cannot be moved between projects.<br/>
> <br/>
> Returns an empty data block.<br/>

*Tags:* `Sections`

#### Input Parameters
* `project_gid` - _required_ - Globally unique identifier for the project.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a story
> Returns the full record for a single story.<br/>

*Tags:* `Stories`

#### Input Parameters
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a story
> Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.<br/>

*Tags:* `Stories`

#### Input Parameters
* `story_gid` - _required_ - Globally unique identifier for the story.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a story
> Deletes a story. A user can only delete stories they have created.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Stories`

#### Input Parameters
* `story_gid` - _required_ - Globally unique identifier for the story.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a story on a task
> Adds a story to a task. This endpoint currently only allows for comment<br/>
> stories to be created. The comment will be authored by the currently<br/>
> authenticated user, and timestamped when the server receives the request.<br/>
> <br/>
> Returns the full record for the new story added to the task.<br/>

*Tags:* `Stories`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a tag
> Creates a new tag in a workspace or organization.<br/>
> <br/>
> Every tag is required to be created in a specific workspace or<br/>
> organization, and this cannot be changed once set. Note that you can use<br/>
> the workspace parameter regardless of whether or not it is an<br/>
> organization.<br/>
> <br/>
> Returns the full record of the newly created tag.<br/>

*Tags:* `Tags`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a tag
> Returns the complete tag record for a single tag.<br/>

*Tags:* `Tags`

#### Input Parameters
* `tag_gid` - _required_ - Globally unique identifier for the tag.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Update a tag
> Updates the properties of a tag. Only the fields provided in the `data`<br/>
> block will be updated; any unspecified fields will remain unchanged.<br/>
> <br/>
> When using this method, it is best to specify only those fields you wish<br/>
> to change, or else you may overwrite changes made by another user since<br/>
> you last retrieved the tag.<br/>
> <br/>
> Returns the complete updated tag record.<br/>

*Tags:* `Tags`

#### Input Parameters
* `tag_gid` - _required_ - Globally unique identifier for the tag.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Delete a tag
> A specific, existing tag can be deleted by making a DELETE request on<br/>
> the URL for that tag.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Tags`

#### Input Parameters
* `tag_gid` - _required_ - Globally unique identifier for the tag.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Create a tag in a workspace
> Creates a new tag in a workspace or organization.<br/>
> <br/>
> Every tag is required to be created in a specific workspace or<br/>
> organization, and this cannot be changed once set. Note that you can use<br/>
> the workspace parameter regardless of whether or not it is an<br/>
> organization.<br/>
> <br/>
> Returns the full record of the newly created tag.<br/>

*Tags:* `Tags`

#### Input Parameters
* `workspace_gid` - _required_ - Globally unique identifier for the workspace or organization.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a task
> Creating a new task is as easy as POSTing to the `/tasks` endpoint with a<br/>
> data block containing the fields you'd like to set on the task. Any<br/>
> unspecified fields will take on default values.<br/>
> <br/>
> Every task is required to be created in a specific workspace, and this<br/>
> workspace cannot be changed once set. The workspace need not be set<br/>
> explicitly if you specify `projects` or a `parent` task instead.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a task
> Returns the complete task record for a single task.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a task
> A specific, existing task can be updated by making a PUT request on the<br/>
> URL for that task. Only the fields provided in the `data` block will be<br/>
> updated; any unspecified fields will remain unchanged.<br/>
> <br/>
> When using this method, it is best to specify only those fields you wish<br/>
> to change, or else you may overwrite changes made by another user since<br/>
> you last retrieved the task.<br/>
> <br/>
> Returns the complete updated task record.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a task
> A specific, existing task can be deleted by making a DELETE request on<br/>
> the URL for that task. Deleted tasks go into the "trash" of the user<br/>
> making the delete request. Tasks can be recovered from the trash within a<br/>
> period of 30 days; afterward they are completely removed from the system.<br/>
> <br/>
> Returns an empty data record.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Duplicate a task
> Creates and returns a job that will asynchronously handle the duplication.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a subtask
> Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Set the parent of a task
> parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Set dependencies for a task
> Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 15 dependencies*.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Unlink dependencies from a task
> Unlinks a set of dependencies from this task.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Set dependents for a task
> Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents*.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Unlink dependents from a task
> Unlinks a set of dependents from this task.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add a project to a task
> Adds the task to the specified project, in the optional location<br/>
> specified. If no location arguments are given, the task will be added to<br/>
> the end of the project.<br/>
> <br/>
> `addProject` can also be used to reorder a task within a project or<br/>
> section that already contains it.<br/>
> <br/>
> At most one of `insert_before`, `insert_after`, or `section` should be<br/>
> specified. Inserting into a section in an non-order-dependent way can be<br/>
> done by specifying section, otherwise, to insert within a section in a<br/>
> particular place, specify `insert_before` or `insert_after` and a task<br/>
> within the section to anchor the position of this task.<br/>
> <br/>
> Returns an empty data block.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove a project from a task
> Removes the task from the specified project. The task will still exist in<br/>
> the system, but it will not be in the project anymore.<br/>
> <br/>
> Returns an empty data block.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add a tag to a task
> Adds a tag to a task. Returns an empty data block.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove a tag from a task
> Removes a tag from a task. Returns an empty data block.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add followers to a task
> Adds followers to a task. Returns an empty data block.<br/>
> Each task can be associated with zero or more followers in the system.<br/>
> Requests to add/remove followers, if successful, will return the complete updated task record, described above.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove followers from a task
> Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.<br/>

*Tags:* `Tasks`

#### Input Parameters
* `task_gid` - _required_ - The task to operate on.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a team membership
> Returns the complete team membership record for a single team membership.<br/>

*Tags:* `Team Memberships`

#### Input Parameters
* `team_membership_gid` - _required_
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Create a team
> Creates a team within the current workspace.<br/>

*Tags:* `Teams`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Get a team
> Returns the full record for a single team.<br/>

*Tags:* `Teams`

#### Input Parameters
* `team_gid` - _required_ - Globally unique identifier for the team.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>
* `limit` - _optional_ - Results per page.<br/>
The number of objects to return per page. The value must be between 1 and 100.<br/>
* `offset` - _optional_ - Offset token.<br/>
An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.<br/>
'Note: You can only pass in an offset that was returned to you via a previously paginated request.'<br/>

### Add a user to a team
> The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.<br/>

*Tags:* `Teams`

#### Input Parameters
* `team_gid` - _required_ - Globally unique identifier for the team.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove a user from a team
> The user making this call must be a member of the team in order to remove themselves or others.<br/>

*Tags:* `Teams`

#### Input Parameters
* `team_gid` - _required_ - Globally unique identifier for the team.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a user task list
> Returns the full record for a user task list.<br/>

*Tags:* `User Task Lists`

#### Input Parameters
* `user_task_list_gid` - _required_ - Globally unique identifier for the user task list.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a user
> Returns the full user record for the single user with the provided ID.<br/>
> Results are sorted by user ID.<br/>

*Tags:* `Users`

#### Input Parameters
* `user_gid` - _required_ - A string identifying a user. This can either be the string "me", an email, or the gid of a user.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Establish a webhook
> Establishing a webhook is a two-part process. First, a simple HTTP POST<br/>
> request initiates the creation similar to creating any other resource.<br/>
> <br/>
> Next, in the middle of this request comes the confirmation handshake.<br/>
> When a webhook is created, we will send a test POST to the target with an<br/>
> `X-Hook-Secret` header. The target must respond with a `200 OK` or `204<br/>
> No Content` and a matching `X-Hook-Secret` header to confirm that this<br/>
> webhook subscription is indeed expected. We strongly recommend storing<br/>
> this secret to be used to verify future webhook event signatures.<br/>
> <br/>
> The POST request to create the webhook will then return with the status<br/>
> of the request. If you do not acknowledge the webhook's confirmation<br/>
> handshake it will fail to setup, and you will receive an error in<br/>
> response to your attempt to create it. This means you need to be able to<br/>
> receive and complete the webhook *while* the POST request is in-flight<br/>
> (in other words, have a server that can handle requests asynchronously).<br/>
> <br/>
> ```<br/>
> # Request<br/>
> curl -H "Authorization: Bearer <personal_access_token>" \<br/>
> -X POST https://app.asana.com/api/1.0/webhooks \<br/>
> -d "resource=8675309" \<br/>
> -d "target=https://example.com/receive-webhook/7654"<br/>
> ```<br/>
> <br/>
> ```<br/>
> # Handshake sent to https://example.com/<br/>
> POST /receive-webhook/7654<br/>
> X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81<br/>
> ```<br/>
> <br/>
> ```<br/>
> # Handshake response sent by example.com<br/>
> HTTP/1.1 200<br/>
> X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81<br/>
> ```<br/>
> <br/>
> ```<br/>
> # Response<br/>
> HTTP/1.1 201<br/>
> {<br/>
>   "data": {<br/>
>     "gid": "43214",<br/>
>     "resource": {<br/>
>       "gid": "8675309",<br/>
>       "name": "Bugs"<br/>
>     },<br/>
>     "target": "https://example.com/receive-webhook/7654",<br/>
>     "active": false,<br/>
>     "last_success_at": null,<br/>
>     "last_failure_at": null,<br/>
>     "last_failure_content": null<br/>
>   }<br/>
> }<br/>
> ```<br/>

*Tags:* `Webhooks`

#### Input Parameters
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a webhook
> Returns the full record for the given webhook.<br/>

*Tags:* `Webhooks`

#### Input Parameters
* `webhook_gid` - _required_ - Globally unique identifier for the webhook.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Delete a webhook
> This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.<br/>

*Tags:* `Webhooks`

#### Input Parameters
* `webhook_gid` - _required_ - Globally unique identifier for the webhook.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a workspace membership
> Returns the complete workspace record for a single workspace membership.<br/>

*Tags:* `Workspace Memberships`

#### Input Parameters
* `workspace_membership_gid` - _required_
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Get a workspace
> Returns the full workspace record for a single workspace.<br/>

*Tags:* `Workspaces`

#### Input Parameters
* `workspace_gid` - _required_ - Globally unique identifier for the workspace or organization.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Update a workspace
> A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.<br/>
> Currently the only field that can be modified for a workspace is its name.<br/>
> Returns the complete, updated workspace record.<br/>

*Tags:* `Workspaces`

#### Input Parameters
* `workspace_gid` - _required_ - Globally unique identifier for the workspace or organization.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Add a user to a workspace or organization
> Add a user to a workspace or organization.<br/>
> The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.<br/>

*Tags:* `Workspaces`

#### Input Parameters
* `workspace_gid` - _required_ - Globally unique identifier for the workspace or organization.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

### Remove a user from a workspace or organization
> Remove a user from a workspace or organization.<br/>
> The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.<br/>
> Returns an empty data record.<br/>

*Tags:* `Workspaces`

#### Input Parameters
* `workspace_gid` - _required_ - Globally unique identifier for the workspace or organization.<br/>
* `opt_pretty` - _optional_ - Provides "pretty" output.<br/>
Provides the response in a "pretty" format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.<br/>
* `opt_fields` - _optional_ - Defines fields to return.<br/>
Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.<br/>
The id of included objects will always be returned, regardless of the field options.<br/>

## License

: asana-component<br/>
                    <br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
