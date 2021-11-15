/**
 * Auto-generated trigger file for "Asana" API.
 *
 * Generated at: 2021-11-15T14:19:16.934Z
 * Mass generator version: 1.0.0
 *
 * : asana-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'searchTasksForWorkspace'
 * Endpoint Path: '/workspaces/{workspace_gid}/tasks/search'
 * Method: 'get'
 *
 */

 const Swagger = require('swagger-client');
 const spec = require('../spec.json');
 
 // this wrapers offers a simplified emitData(data) function
 module.exports = {process: processTrigger};
 
 // parameter names for this call
 const PARAMETERS = [
    "workspace_gid",
    "opt_pretty",
    "opt_fields",
    "text",
    "resource_subtype",
    "assignee.any",
    "assignee.not",
    "portfolios.any",
    "projects.any",
    "projects.not",
    "projects.all",
    "sections.any",
    "sections.not",
    "sections.all",
    "tags.any",
    "tags.not",
    "tags.all",
    "teams.any",
    "followers.not",
    "created_by.any",
    "created_by.not",
    "assigned_by.any",
    "assigned_by.not",
    "liked_by.not",
    "commented_on_by.not",
    "due_on.before",
    "due_on.after",
    "due_on",
    "due_at.before",
    "due_at.after",
    "start_on.before",
    "start_on.after",
    "start_on",
    "created_on.before",
    "created_on.after",
    "created_on",
    "created_at.before",
    "created_at.after",
    "completed_on.before",
    "completed_on.after",
    "completed_on",
    "completed_at.before",
    "completed_at.after",
    "modified_on.before",
    "modified_on.after",
    "modified_on",
    "modified_at.before",
    "modified_at.after",
    "is_blocking",
    "is_blocked",
    "has_attachment",
    "completed",
    "is_subtask",
    "sort_by",
    "sort_ascending"
];
 
 // mappings from connector field names to API field names
 const FIELD_MAP = {
    "workspace_gid": "workspace_gid",
    "opt_pretty": "opt_pretty",
    "opt_fields": "opt_fields",
    "text": "text",
    "resource_subtype": "resource_subtype",
    "assignee_any": "assignee.any",
    "assignee_not": "assignee.not",
    "portfolios_any": "portfolios.any",
    "projects_any": "projects.any",
    "projects_not": "projects.not",
    "projects_all": "projects.all",
    "sections_any": "sections.any",
    "sections_not": "sections.not",
    "sections_all": "sections.all",
    "tags_any": "tags.any",
    "tags_not": "tags.not",
    "tags_all": "tags.all",
    "teams_any": "teams.any",
    "followers_not": "followers.not",
    "created_by_any": "created_by.any",
    "created_by_not": "created_by.not",
    "assigned_by_any": "assigned_by.any",
    "assigned_by_not": "assigned_by.not",
    "liked_by_not": "liked_by.not",
    "commented_on_by_not": "commented_on_by.not",
    "due_on_before": "due_on.before",
    "due_on_after": "due_on.after",
    "due_on": "due_on",
    "due_at_before": "due_at.before",
    "due_at_after": "due_at.after",
    "start_on_before": "start_on.before",
    "start_on_after": "start_on.after",
    "start_on": "start_on",
    "created_on_before": "created_on.before",
    "created_on_after": "created_on.after",
    "created_on": "created_on",
    "created_at_before": "created_at.before",
    "created_at_after": "created_at.after",
    "completed_on_before": "completed_on.before",
    "completed_on_after": "completed_on.after",
    "completed_on": "completed_on",
    "completed_at_before": "completed_at.before",
    "completed_at_after": "completed_at.after",
    "modified_on_before": "modified_on.before",
    "modified_on_after": "modified_on.after",
    "modified_on": "modified_on",
    "modified_at_before": "modified_at.before",
    "modified_at_after": "modified_at.after",
    "is_blocking": "is_blocking",
    "is_blocked": "is_blocked",
    "has_attachment": "has_attachment",
    "completed": "completed",
    "is_subtask": "is_subtask",
    "sort_by": "sort_by",
    "sort_ascending": "sort_ascending"
};
 
 function processTrigger(msg, cfg) {
     var isVerbose = process.env.debug || cfg.verbose;
 
     console.log("msg:",msg);
     console.log("cfg:",cfg)
 
     if (isVerbose) {
         console.log(`---MSG: ${JSON.stringify(msg)}`);
         console.log(`---CFG: ${JSON.stringify(cfg)}`);
         console.log(`---ENV: ${JSON.stringify(process.env)}`);
     }
 
     const contentType = undefined;
 
     const body = msg.data;
     mapFieldNames(body);
 
     let parameters = {};
     for(let param of PARAMETERS) {
         parameters[param] = body[param];
     }
 
     const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
     ? msg.metadata.oihUid
     : 'oihUid not set yet';
   const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
     ? msg.metadata.recordUid
     : undefined;
   const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
     ? msg.metadata.applicationUid
     : undefined;
 
     const newElement = {};
     const oihMeta = {
       applicationUid,
       oihUid,
       recordUid,
     };
     
     // credentials for this operation
     let securities = {};
    securities['personalAccessToken'] = cfg['auth_personalAccessToken'];
    securities['oauth2'] = {token: cfg['auth_oauth2']};
 
     if(cfg.otherServer){
         if(!spec.servers){
             spec.servers = [];
         }
         spec.servers.push({"url":cfg.otherServer})
     }
     
     
     let callParams = {
         spec: spec,
         operationId: 'searchTasksForWorkspace',
         pathName: '/workspaces/{workspace_gid}/tasks/search',
         method: 'get',
         parameters: parameters,
         requestContentType: contentType,
         requestBody: body,
         securities: {authorized: securities},
         server: spec.servers[cfg.server] || cfg.otherServer,
     };
         if(callParams.method === 'get'){
             delete callParams.requestBody;
         }
     
 
     if (isVerbose) {
         let out = Object.assign({}, callParams);
         out.spec = '[omitted]';
         console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
     }
 
     // Call operation via Swagger client
     return Swagger.execute(callParams).then(data => {

         delete data.uid;
         newElement.metadata = oihMeta;
         const response = JSON.parse(data.data);
         newElement.data = cfg.nodeSettings.arraySplittingKey !== undefined ? response[cfg.nodeSettings.arraySplittingKey] : response;
         if(Array.isArray(newElement.data)){
            for(let i = 0; i < newElement.data.length; i++ ){
                const newObject = newElement;
                newObject.data = newElement.data[i];
                this.emit("data",newObject)
            }
        } else {
        this.emit("data",newElement);
} 
     });
 }
 
 function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
        return obj
    }
 }