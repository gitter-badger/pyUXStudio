"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var CreateNewProject = (function () {
    function CreateNewProject(filename) {
        this.filename = filename;
    }
    CreateNewProject.prototype.create = function () {
        var fpath = path.join(__dirname, this.filename + '.xml');
        fs.writeFile(fpath, '<?xml version="1.0" encoding="UTF-8" ?>\n<App type="pyUX" version="1.0" project="'
            + this.filename
            + '">\n\n</App>');
    };
    return CreateNewProject;
}());
exports.CreateNewProject = CreateNewProject;
var SaveToProject = (function () {
    function SaveToProject(filename) {
        this.filename = filename;
    }
    SaveToProject.prototype.writeAll = function (data) {
        var fpath = path.join(__dirname, this.filename + '.xml');
        fs.writeFile(fpath, '<?xml version="1.0" encoding="UTF-8" ?>\n<App type="pyUX" version="1.0" project="'
            + this.filename
            + '">\n\n</App>');
        fs.appendFile(fpath, data);
    };
    SaveToProject.prototype.appendData = function (data) {
        var fpath = path.join(__dirname, this.filename + '.xml');
        fs.appendFile(fpath, data);
    };
    return SaveToProject;
}());
exports.SaveToProject = SaveToProject;
var LoadProject = (function () {
    function LoadProject(filename) {
        this.filename = filename;
    }
    LoadProject.prototype.content = function () {
        var fpath = path.join(__dirname, this.filename + '.xml');
        return fs.readFileSync(fpath);
    };
    return LoadProject;
}());
exports.LoadProject = LoadProject;
