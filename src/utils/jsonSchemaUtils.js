/**
 * Created by Administrator on 2016/12/5.
 */
const assert = require('assert');
const jsf = require('json-schema-faker');
const tv4 = require('tv4');
const keys = require('lodash/keys');
const merge = require('lodash/merge');

function modifySchema(schema) {
    if (schema.type instanceof Array) {
        schema.type = schema.type.find(
            (ele) => ele !== 'null'
        );
    }

    if (schema.type === 'object') {
        if (!schema.hasOwnProperty('required')) {
            schema.required = [];
        }
        keys(schema.properties).forEach(
            (k) => {
                if (!schema.required.includes(k)) {
                    schema.required.push(k);
                }
                modifySchema(schema.properties[k]);
            }
        );
    }
    else if (schema.type === 'array') {
        modifySchema(schema.items);
    }
    return schema;
}

function modifyData(data, schema) {
    if (data instanceof Array) {
        data.forEach(
            (ele) => modifyData(ele, schema.items)
        );
    }
    else if (typeof data === 'object') {
        assert(schema && schema.properties)
        keys(data).forEach(
            (k) => {
                // 我们使得所有的属性都产生出来，在这里可以随机删除一些非必要产生的属性
                if (schema.required && !schema.required.includes(k)) {
                    const ran = Math.random();
                    if (ran > 0.8) {
                        delete data[k];
                    }
                }
            }
        );

        keys(data).forEach(
            (k) => {
                // 我们使所有可能为null的属性都产生出来，在这里可以随机产生一些null
                if (schema.properties[k].type instanceof Array) {
                    assert(schema.properties[k].type.includes('null'));
                    const ran = Math.random();
                    if (ran > 0.8) {
                        data[k] = null;
                    }
                }
            }
        );

        keys(data).forEach(
            (k) => {
                // 使所有id项和对应的对象id对应
                if (
                    typeof data[k] === 'object' &&
                    data[k] &&
                    data[k].hasOwnProperty('id') &&
                    data.hasOwnProperty(`${k}Id`) &&
                    typeof data[`${k}Id`] === 'number'
                ) {
                    data[`${k}Id`] = data[k].id;
                }
            }
        );

        keys(data).forEach(
            (k) => {
                // 使所有id项和对应的对象id对应
                if (
                    typeof data[k] === 'object' &&
                    data[k]
                ) {
                    modifyData(data[k], schema.properties[k]);
                }
            }
        );
    }
    else {
        return;
    }
}

/**
 * 对数据进行schema检查
 * @param data
 * @param schema
 */
function validate(data, schema) {
    const valid = tv4.validateResult(data, schema);
    if (valid.error) {
        throw new Error(`经过tailor后的数据不满足jsonSchema约束，错误是${valid.error}`);
    }
}

/**
 * 这个函数必须在JSF的基础上加一些定制，否则返回的数据太过随机
 * @param schema
 */
function generateDataBySchema(schema, tailor) {
    const schema2 = merge({}, schema);
    if (schema2.hasOwnProperty('$schema')) {
        delete schema2.$schema;
    }
    modifySchema(schema2);
    let data = jsf(schema2);
    modifyData(data, schema);

    if (tailor) {
        if (typeof tailor === 'object') {
            data = merge({}, data, tailor);
        }
        else if (typeof tailor === 'function') {
            data = tailor(data);
        }
        else {
            throw new Error('tailor参数必须是对象或函数类型');
        }

        validate(data, schema);
    }
    return data;
}


module.exports = {
    generateDataBySchema,
    validate
};
